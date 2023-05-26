import { createContext } from "react";

interface UserContextType {
  // Define the context properties and methods here
  // Example:
  // showList: Show[];
  // updateShowList: (newList: Show[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
