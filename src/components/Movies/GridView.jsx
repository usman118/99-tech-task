import { useEffect, useState } from "react";
// import axios from "axios";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { PropTypes } from "prop-types";
import { GridComponent } from "./GridComponent";
import { logout } from "../../Redux/Auth/AuthSlice";
import { useDispatch } from "react-redux";
export default function GridView(data_new) {
  const dispatch = useDispatch();
  let data = data_new.data_new ? data_new.data_new : "";
  const [filteredData, setFilteredData] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search) {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);

      if (!filtered.length) {
        setFilteredData(data);
      }
    } else {
      setFilteredData(data);
    }
  }, [search, data]);

  return (
    <div>
      {/* flex box */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{ marginLeft: "20px", height: "55px" }}
          variant="contained"
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      </Box>
      <h1
        style={{
          fontFamily: "Roboto , sans-serif  ",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Movies
      </h1>

      <hr />
      <TextField
        sx={{ width: "40%", marginBottom: "20px" }}
        id="outlined-basic"
        label="Search Movies"
        variant="outlined"
        onChange={handleSearch}
      />
      <Button
        sx={{ marginLeft: "20px", height: "55px" }}
        variant="contained"
        onClick={handleSearch}
      >
        Search
      </Button>
      <Box>
        <GridComponent filteredData={filteredData} />
      </Box>
    </div>
  );
}

GridView.prototype = {
  data_new: PropTypes.array,
};
