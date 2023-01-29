// Package Imports
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Local Imports
import { Input, Wrapper, SearchContainer } from "./style";
import { Line } from "@primitives";
import { selectFilteredCount, selectPostItems, setFilteredPostItems } from "src/features/Post/PostSlice";


const SearchInput = () => {
  const dispatch = useDispatch();
  const postItems = useSelector(selectPostItems);
  const filteredCount = useSelector(selectFilteredCount);
  const [searchTerm, setSearchTerm] = useState('');

  const filterBySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
  };

  useEffect(() => {
    const filteredItems = postItems.filter((item: any) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    dispatch(setFilteredPostItems(filteredItems));
}, [searchTerm]);

  return (
    <SearchContainer>
      <Wrapper>
        <Input placeholder="Start typing to search..." value={searchTerm} onChange={(e) => filterBySearch(e)} />
      </Wrapper>
      
      {(searchTerm == '') ? (
        <p id="results">Enter keywords above to start searching.</p>
      ): (filteredCount > 0) ? (
          <p id="results">{filteredCount} results found.</p>
      ): (
        <p id="results">No results found.</p>
      )}
      <Line color="#5CC9E2" height="2px" css={{marginTop:"24px"}} />
    </SearchContainer>
  );
};

export default SearchInput;
