import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { Button, CircularProgress, Container } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

export const MoviesInfo = ({ data_new }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = data_new ? data_new : "";
  const [filteredData, setFilteredData] = useState("");
  useEffect(() => {
    const filtered = data.filter((item) => item.id == id);
    setFilteredData(filtered[0]);
  }, [id]);

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Container maxWidth="sm">
        <h2>{filteredData.title}</h2>
        <img
          src={filteredData.posterURL}
          alt={filteredData.title}
          style={{ width: "100%", height: "auto" }}
        />
        <p>IMDB ID : {filteredData.imdbId}</p>
        <hr />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
      </Container>
    </div>
  );
};

MoviesInfo.propTypes = {
  data_new: PropTypes.array,
};
