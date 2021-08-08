import { useState } from 'react';
import { fetch_custom } from '../utilities';

function SearchFilters({ todoList, setTodoList }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onClickSearchBtn = () => {
    fetch_custom.getSearchResults(search).then((data) => {
      const result = data.data;
      setTodoList(result);
      console.log(data);
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <button type="button" onClick={onClickSearchBtn}>
        검색
      </button>
    </div>
  );
}

export default SearchFilters;
