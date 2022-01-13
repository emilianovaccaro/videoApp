import React, { useState } from 'react';


const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return(
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="ui action input">
          <input 
            onChange={onInputChange}
            type="text"
            placeholder="Search..."
            value={term} />
          <button onClick={() => onInputChange} className="ui icon button">
            <i className="search icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;