import "./App.css";
import { CircularProgress, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GridView from "./components/Movies/GridView";
import TableView from "./components/Movies/TableView";
import { MoviesInfo } from "./components/Movies/MoviesInfo";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((state) => state);
  console.log(auth.email);
  const [data, setData] = useState("");
  const getData = async () => {
    const resp = await axios.get("https://api.sampleapis.com/movies/animation");
    setData(resp.data);
  };
  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return <CircularProgress />;
  }
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Container maxWidth="xl">
          <Routes>
            {auth.email ? (
              <>
                <Route path="/" element={<TableView data_new={data} />} />
                <Route
                  path="/gridview"
                  element={<GridView data_new={data} />}
                />

                <Route
                  path="/movies/:id"
                  element={<MoviesInfo data_new={data} />}
                />
              </>
            ) : (
              <>
                <Route path="/*" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </>
            )}
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
