import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={s.searchBox}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={s.input}
        placeholder="Search by name..."
      />
    </label>
  );
};

export default SearchBox;
