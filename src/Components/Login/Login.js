import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../Context/AuthContext";
import {
  Grid,
  Alert,
  TextField,
  Button,
  FormGroup,
  Card,
  CardContent,
} from "@mui/material";
import googleIcon from "../../logo/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError("Failed to login!");
    }
    setLoading(false);
  }

  //handle google signIn
  async function handleGoogleSignIn() {
    try {
      setError("");
      setLoading(true);
      await googleSignIn(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError("Failed to login!");
    }
  }
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "86vh",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Grid item xs={11} sm={6} md={6} lg={6} xl={6}>
          <Card elevation={6} style={{ width: '90%', }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <h3 className="loginHeader">Login</h3>
                {error && (
                  <Alert
                    variant="outlined"
                    severity="error"
                    sx={{ mb: "10px", mt: "5px" }}
                  >
                    {error}
                  </Alert>
                )}
                <FormGroup>
                  <TextField
                    label="Enter your email"
                    variant="standard"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                    required
                  />
                </FormGroup>
                <FormGroup sx={{ mb: 3 }}>
                  <TextField
                    label="Enter your password"
                    variant="standard"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                    required
                  />
                </FormGroup>
                <Link to="/forgotPassword">Forgot password?</Link>
                <Button
                  variant="contained"
                  disabled={loading}
                  type="submit"
                  sx={{ mt: 3, mb: 4, width: "100%" }}
                >
                  Log In
                </Button>
              </form>
              <div style={{ textAlign: "center" }}>
                Need an account? <Link to="/signup">Sign Up</Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} sm={6} md={6}>
          <div className="googleSignIn">
            <h3>Or</h3>
            <button className="googleSignInButton" onClick={handleGoogleSignIn}>
              <img className="googleIcon" src={googleIcon} alt="googleImage" />
              Continue With Google
            </button>
          </div>
        </Grid>
      </div>

    </Grid>
  );
};

export default Login;
