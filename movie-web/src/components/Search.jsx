import React from 'react'

const Search = (props) => {
    const { onInput, query, ...otherProps } = props;
  
    return (
      <form className="search" onInput={onInput}>
        <input type="search" value={query} {...otherProps} />
      </form>
    );
  };

export default Search