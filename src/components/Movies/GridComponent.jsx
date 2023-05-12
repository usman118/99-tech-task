import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
export const GridComponent = (filteredData) => {
  filteredData = filteredData.filteredData ? filteredData.filteredData : "";
  return (
    <Grid container spacing={4}>
      {filteredData &&
        filteredData.map((item) => (
          <Grid item md={4} lg={3} key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <CardMedia
                  component="img"
                  image={item.posterURL}
                  alt="alt text"
                  sx={{
                    width: "280px",
                    height: "240px",
                    border: "2px solid #000 ",
                  }}
                />

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    position: "relative",
                    top: "-80px",
                    backgroundColor: "#000",
                    width: "240px",
                    color: "#fff",
                    padding: "5px",
                    display: "flex",
                    margin: "auto",
                  }}
                >
                  {item.title}
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};

GridComponent.propTypes = {
  filteredData: PropTypes.array,
};
