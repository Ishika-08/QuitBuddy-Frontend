import PostContext from "./PostContext";
import React, { useState, useEffect } from 'react';

interface Show {
  // Define the structure of the show object
  id: number;
  name: string;
  // Add more properties as needed
}

const ShowsState: React.FC = (props) => {
  // Setting state
  const [data, setData] = useState<Show[]>([]);

  // Fetching data from API
  useEffect(() => {
    fetch('your api link')
      .then(response => response.json())
      .then((data: Show[]) => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <PostContext.Provider value={data}>
      {/* {props.children} */}
    </PostContext.Provider>
  );
};

export default ShowsState;