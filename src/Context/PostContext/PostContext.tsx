import { createContext } from "react";

interface PostsContextType {
  // Define the context properties and methods here
  // Example:
  // showList: Show[];
  // updateShowList: (newList: Show[]) => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export default PostsContext;
