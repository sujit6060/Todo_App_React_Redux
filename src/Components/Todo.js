import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "semantic-ui-react";
import { InputGroup, FormControl } from "react-bootstrap";
import { addtask } from "../Reducer";
import Show from "./Show";

const Todo = () => {
  const state = useSelector((state) => state.LOGIN);

  const dispatch = useDispatch();

  const [task, setTask] = useState([]);

  const handler = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <div>
        <div
          className="container"
          style={{
            width: "360px",
            backgroundColor: "black",
            border: "5px solid black",
            color: "white",
            borderRadius: "20px",
            padding: "20px",
            height: "600px",
          }}
        >
          <div>
            <h2 style={{ paddingLeft: "200px" }}>
              <LoginIcon /> . {state.user}
            </h2>
            <br></br>
            <InputGroup
              className="mb-3"
              style={{
                width: "300px",
                paddingLeft: "10px",
              }}
            >
              <FormControl
                placeholder="Add Here What TODO..."
                onChange={handler}
                value={task}
                name="task "
              />

              <Button
                inverted
                color="red"
                onClick={() => {
                  dispatch(
                    addtask({
                      txt: task,
                      id: Date.now().toString(),
                      completed: false,
                    })
                  );
                  setTask("");
                }}
              >
                ADDTASK
              </Button>
            </InputGroup>
          </div>
          <br></br>
          <Show />
        </div>
      </div>
    </>
  );
};

export default Todo;
