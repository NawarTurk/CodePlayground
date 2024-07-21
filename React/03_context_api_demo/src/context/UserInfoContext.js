import { createContext } from "react";

const UserInfoContext = createContext({
  username: "Guest",
  isAdmin: false,
});

export default UserInfoContext;

// / The file is named after the main export, UserInfoContext, for easy identification and consistency.
