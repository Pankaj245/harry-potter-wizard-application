import React from "react";
import "./Error.scss";

interface ErrorProps {
  message: string;
  errorflag: boolean;
}

const Error: React.FC<ErrorProps> = ({ message, errorflag }) => (
  <div className="error-container">
    {errorflag && `Error: `}
    <p>{message}</p>
  </div>
);

export default Error;
