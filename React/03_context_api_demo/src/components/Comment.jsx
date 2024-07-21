import React, { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function Comment() {
  const { username, isAdmin } = useContext(UserInfoContext);

  return (
    <div>
      <h3>Comments</h3>
      <p>Logged in as: {username} </p>
      {isAdmin && <button>Edit</button>}
    </div>
  );
}
