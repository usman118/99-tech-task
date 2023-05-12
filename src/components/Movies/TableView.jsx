import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { TableComponent } from "./TableComponent";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { logout } from "../../Redux/Auth/AuthSlice";
import { useDispatch } from "react-redux";

export default function TableView(data_new) {
  let data = data_new.data_new ? data_new.data_new : "";
  const dispatch = useDispatch();
  return (
    <div>
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
      <div style={{ textAlign: "center" }}>
        <Link to="/gridview">Other View</Link>
      </div>
      <br />
      <hr />
      <TableComponent data={data} />
    </div>
  );
}

TableView.prototype = {
  data_new: PropTypes.array,
};
