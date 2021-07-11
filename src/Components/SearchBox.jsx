import React from "react";
import "./SearchBox.css";

const SearchBox = ({ onInputChange }) => {
  return (
    <div className="seach-container">
      <input
        onChange={(event) => onInputChange(event.target.value)}
        placeholder="Type Keywords"
        className="seach-input"
      />
    </div>
  );
};

export default SearchBox;
