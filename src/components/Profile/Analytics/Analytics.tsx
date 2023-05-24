import React, { useEffect, useState } from 'react';

const SmokingProgressComparison = () => {
  const [userProgress, setUserProgress] = useState(null);
  const [globalStats, setGlobalStats] = useState(null);

  useEffect(() => {
    // Fetch user progress from API
    fetch('/api/userProgress')
      .then(response => response.json())
      .then(data => setUserProgress(data))
      .catch(error => console.log(error));

    // Fetch global statistics from API
    fetch('/api/globalStats')
      .then(response => response.json())
      .then(data => setGlobalStats(data))
      .catch(error => console.log(error));
  }, []);

  const renderComparison = () => {
    if (!userProgress || !globalStats) {
      return <div>Loading...</div>;
    }

    // Perform comparison calculations and display the results
    // Example: Compare user's average cigarettes smoked per week with global average
    // const userCigarettesPerWeek = userProgress.totalCigarettes / userProgress.weeksSinceQuit;
    // const globalCigarettesPerWeek = globalStats.totalCigarettes / globalStats.totalUsers;
    const userCigarettesPerWeek = 5;
    const globalCigarettesPerWeek= 10;

    return (
      <div>
        <h2>Your Progress vs Global Statistics</h2>
        <p>Your average cigarettes per week: {userCigarettesPerWeek}</p>
        <p>Global average cigarettes per week: {globalCigarettesPerWeek}</p>
        {/* Add more comparisons and statistics here */}
      </div>
    );
  };

  return (
    <div>
      <h1>Smoking Progress Comparison</h1>
      {renderComparison()}
    </div>
  );
};

export default SmokingProgressComparison;
