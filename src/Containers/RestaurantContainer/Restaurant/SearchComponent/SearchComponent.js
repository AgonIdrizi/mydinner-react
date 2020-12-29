import React, { useState } from "react";
import { Input } from "antd";
import { RestaurantContext } from "../../../../contexts/RestaurantContext";
import useDebounce from "../../../../hooks/useDebounce";
const { Search } = Input;

const SearchComponent = React.memo(({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setdebouncedSearchValue] = useDebounce(
    searchValue,
    500,
    setSearchTerm
  );

  const onHandleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <Search
      placeholder="input search text"
      value={searchValue}
      onChange={event => onHandleSearchChange(event)}
    />
  );
});

export default SearchComponent;
