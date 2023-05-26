// import React, { createContext, useState } from 'react';

// interface AuthContextType {
//   userID: string | null;
//   login: (email: string, password: string) => Promise<void>;
// }

// const initialAuthContext: AuthContextType = {
//   userID: null,
//   login: async () => {},
// };

// export const AuthContext = createContext(initialAuthContext);

// export const AuthProvider: React.FC = ({ children }) => {
//   const [userID, setUserID] = useState<string | null>(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false); // Added loading state
//   const [error, setError] = useState(false); // Added error state


//   const login = async (email: string, password: string) => {
//     try {
//       // Your login logic here
//       setLoading(true); // Set loading to true before making the request
//       const response = await fetch(`https://geeks-for-geeks-health-backend.up.railway.app/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();

//         // Access the response data here
//         const userID = data._id;

//         setUserID(userID); // Set the userID in the state
//       } else if (response.status === 500) {
//         setError(true); // Set error to true for wrong credentials
//       } else {
//         console.log('Error:', response.status);
//       }
//     } catch (error: any) {
//       console.log('Error:', error.message);
//     } finally {
//       setLoading(false); // Set loading back to false after the request is completed
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ userID, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
