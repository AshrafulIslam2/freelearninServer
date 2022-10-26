import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContexts } from "../UserContext/UserContext";

const PrivetRoute = ({ children }) => {
  const { Duser, loder } = useContext(AuthContexts);
  if (loder) {
    return (
      <div>
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (Duser && Duser.uid) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivetRoute;
