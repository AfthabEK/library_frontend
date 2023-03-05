import { useState, useEffect} from "react";

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    props.filter(inputValue);
  }, [inputValue, props]);

  return (
    <div class="input-group rounded mt-4">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        defaultValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
    </div>
  );
};


export default SearchBar;