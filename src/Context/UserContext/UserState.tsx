import UserContext from "./UserContext";
import React, { useState, useEffect } from 'react';

interface Show {
  // Define the structure of the show object
  id: number;
  name: string;
  // Add more properties as needed
}

const ShowsState: React.FC = () => {
  // Setting state
  const [data, setData] = useState<Show[]>([]);

  // Fetching data from API
  useEffect(() => {
    fetch('/your api')
      .then(response => response.json())
      .then((data: Show[]) => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <UserContext.Provider value={data}>
      {/* {props.children} */}
    </UserContext.Provider>
  );
};

export default ShowsState;