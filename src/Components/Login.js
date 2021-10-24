import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addlogin } from "../Reducer/login";
import { useHistory } from "react-router";
import { Card } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch();
  const NavigateToNext = useHistory();
  const [input, setinput] = useState([]);
  const handler = (event) => {
    setinput(event.target.value);
  };

  const getData = () => {
    dispatch(addlogin(input));
    if (input > "0") {
      NavigateToNext.push("/todo");
    }
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div
        className="container"
        style={{
          width: "375px",
          border: "2px solid black",
          padding: "30px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <Form>
          <Card.Header
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontFamily: "Times New Roman', Times, serif",
              fontWeight: "bolder",
            }}
          >
            LOGIN
          </Card.Header>

          <br></br>
          <Form.Field>
            <label style={{ color: "white" }}>UserName</label>
            <input
              placeholder="Enter Your Username"
              onChange={handler}
              type="text"
              id="username"
              required
              style={{ borderRadius: "10px" }}
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "white" }}>Password</label>
            <input
              placeholder="Enter Your Password"
              type="password"
              id="password"
              required
              style={{ borderRadius: "10px" }}
            />
          </Form.Field>

          <br></br>
          <br></br>
          <Button type="submit" onClick={getData} style={{ color: "black" }}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
