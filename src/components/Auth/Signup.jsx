import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Auth/AuthSlice";

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const initialValues = {
    username: "",
    fname: "",
    lname: "",
    ...auth,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Required"),
  });
  const onSubmit = (values) => {
    console.log(values);
    dispatch(
      register({
        email: values.email,
        password: values.password,
      })
    );
    navigate("/");
  };
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />

            <TextField
              fullWidth
              id="fname"
              name="fname"
              label="First Name"
              variant="outlined"
              value={formik.values.fname}
              onChange={formik.handleChange}
              error={formik.touched.fname && Boolean(formik.errors.fname)}
              helperText={formik.touched.fname && formik.errors.fname}
            />

            <TextField
              fullWidth
              id="lname"
              name="lname"
              label="Last Name"
              variant="outlined"
              value={formik.values.lname}
              onChange={formik.handleChange}
              error={formik.touched.lname && Boolean(formik.errors.lname)}
              helperText={formik.touched.lname && formik.errors.lname}
            />

            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Register
            </Button>

            <Link to="/login">Already have an account? Login here</Link>
          </form>
        )}
      </Formik>
    </div>
  );
};
