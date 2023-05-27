// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { useParams } from 'react-router-dom';

// // Define the shape of your data
// interface Data {
//   username: string;
//   email: string;
//   perDayCount: number;
//   cigarettesNotSmoked: number;
//   lungCapacity: number;
//   diseaseRisk: number;
// }

// // Create the data context
// const DataContext = createContext<Data | null>(null);

// // Create a custom hook to access the data context
// export const useData = (): Data | null => useContext(DataContext);

// // Create a data provider component
// interface DataProviderProps {
//   children: ReactNode;
// }

// export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
//   const [data, setData] = useState<Data | null>(null);
//   const {userID} = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://geeks-for-geeks-health-backend.up.railway.app/${userID}/medicalData`
//         );
//         const data = await response.json();
//         setData(data);
//         console.log(data)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [userID]);

//   return (
//     <DataContext.Provider value={data}>
//       {children}
//     </DataContext.Provider>
//   );
// };
