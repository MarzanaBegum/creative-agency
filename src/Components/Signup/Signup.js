import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Grid,
  Alert,
  TextField,
  Button,
  FormGroup,
  Card,
  CardContent,
} from "@mui/material";
import { useAuth } from "../Context/AuthContext";

const Signup = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, name);
      navigate(from, { replace: true });
    } catch (error) {
      setError("Failed to create an account!");
    }
    setLoading(false);
  }
  return (
    <Grid
      container
      sx={{ justifyContent: 'center', alignItems: "center", height: "90vh" }}
    >
      <Grid item xs={11} sm={10} md={10} lg={10} xl={10}>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Card elevation={6} style={{ width: '50%', }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    color: "purple",
                    textAlign: "center",
                  }}
                >
                  Sign Up
                </h3>
                {error && (
                  <Alert
                    variant="outlined"
                    severity="error"
                    sx={{ mb: "10px", mt: "5px" }}
                  >
                    {error}
                  </Alert>
                )}
                <FormGroup sx={{ mb: 3 }}>
                  <TextField
                    label="Enter your name"
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    required
                  />
                </FormGroup>
                <FormGroup sx={{ mb: 3 }}>
                  <TextField
                    label="Enter your email"
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    required
                  />
                </FormGroup>
                <FormGroup sx={{ mb: 3 }}>
                  <TextField
                    label="Enter password ...."
                    variant="standard"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    required
                  />
                </FormGroup>
                <FormGroup sx={{ mb: 3 }}>
                  <TextField
                    label="Enter password ...."
                    variant="standard"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    name="passwordConfirm"
                    required
                  />
                </FormGroup>
                <Button
                  variant="contained"
                  disabled={loading}
                  type="submit"
                  sx={{ mb: 3, width: "100%" }}
                >
                  Sign Up
                </Button>
              </form>
              <div style={{ textAlign: "center" }}>
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
