import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import classes from "./LoginPage.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import loginValidation from "../validation/loginValidation";

const LoginPage = (props) => {
  const location = useLocation();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [ptype, setPtype] = useState("password");
  const [pwicon, setPwicon] = useState(<FaEye />);
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";
  const authenticateHandler = async (e) => {
    e.preventDefault();
    let object = {};
    const url = "http://localhost:7000/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });

    if (response.status === 422) {
      formik.resetForm();
      return setError("The entered credentials is incorrect.");
    }
    if (!response.ok) {
      formik.resetForm();
      return setError("The database cannot be accessed now. Try again!");
    }
    const result = await response.json();
    setAuth({ user: "admin" });
    navigate(from, { replace: true });
  };

  //formik is a library used for login validation pls ignore
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values) => {
      let object = {
        username: values.username,
        password: values.password,
      };
      console.log(object, "object");
      const url = "http://localhost:7000/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });

      if (response.status === 422) {
        formik.resetForm();
        return setError("The entered credentials is incorrect.");
      }
      if (!response.ok) {
        formik.resetForm();
        return setError("The database cannot be accessed now. Try again!");
      }
      const result = await response.json();
      setAuth({ user: "admin" });
      navigate(from, { replace: true });
    },
  });
  const { errors, values, handleChange, handleBlur, handleSubmit } = formik;
  const usernameError = errors.username && formik.touched.username;
  const passwordError = errors.password && formik.touched.password;
  return (
    <div className={classes.login}>
      <div className={classes.maincard}>
        <div className={classes.imagediv}></div>
        <div className={classes.formdiv1}>
          <form className={classes.formdiv} onSubmit={handleSubmit}>
            {error !== "" && (
              <p className="text-center" style={{ color: "red" }}>
                {error}
              </p>
            )}
            <h1 className={classes.logh}>Login</h1>
            <fieldset>
              <div className={classes.form__group + " " + classes.field}>
                <input
                  className={classes.form__field}
                  type="text"
                  autoComplete="off"
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Username"
                  required
                />
                {usernameError && (
                  <p style={{ color: "red" }}>{errors.username}</p>
                )}
                <label htmlFor="username" className={classes.form__label}>
                  Username
                </label>
              </div>
              <div className={classes.form__group + " " + classes.field}>
                <input
                  className={classes.form__field}
                  type={ptype}
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
                {passwordError && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
                <label htmlFor="password" className={classes.form__label}>
                  Password
                </label>
              </div>
            </fieldset>
            <div className={classes.btn}>
              <button type="submit" className={classes.button}>
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
