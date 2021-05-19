import { useState } from "react";
import { Button, TextField } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ContactListComponent from '../../ContactListComponent';

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  function attempt() {
    if (username === "foo" && password === "bar") {
      setAuth(true);
    }
    else alert("Invalid Credentials.");
  }
  return (
    <>
      {auth && <ContactListComponent/>}
      {!auth && (<div>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            style={{
              marginBottom: "30px",
              color: "#E5525E",
              fontWeight: "bolder",
            }}
          >
            LOGIN
          </Typography>
          <div style={{ marginBottom: "30px" }}>
            <TextField
              id="standard-basic"
              label="Enter your username"
              // fullWidth="true"
              variant="filled"
              // marginTop="100px"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginBottom: "30px", width: "100%" }}
            />

            <TextField
              id="filled-password-input"
              label="Enter your password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              // fullWidth="true"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "30px", width: "100%" }}
            />
          </div>
          <Button
            style={{
              backgroundColor: "#F8595F",
              color: "white",
              marginBottom: "30px",
              padding: "15px",
              fontSize: "20px",
              fontWeight: "bolder",
              width: "100%"
            }}
            variant="contained"
            // fullWidth="true"
            onClick={() => attempt()}
          >
            Submit
          </Button>
        </Container>
      </div>)}
    </>
  );
};

export default LoginComponent;
