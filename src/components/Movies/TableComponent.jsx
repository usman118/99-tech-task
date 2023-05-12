import { PropTypes } from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export const TableComponent = (data) => {
  data = data.data ? data.data : "";
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">IMDB ID</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                {/* image link */}
                <a href={row.posterURL} target="_blank" rel="noreferrer">
                  view
                </a>
              </TableCell>
              <TableCell align="right">{row.imdbId}</TableCell>
              <TableCell align="right">
                <Link to={`/movies/${row.id}`}>View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableComponent.prototype = {
  data: PropTypes.array,
};
