import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { TextField, Box, Typography } from "@mui/material";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Find contacts by name</Typography>
      <TextField
        value={filter}
        onChange={handleChange}
        label="Search by name"
        variant="outlined"
        placeholder="Search by name..."
        className={styles.input}
      />
    </Box>
  );
};

export default SearchBox;
