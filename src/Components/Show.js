import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "semantic-ui-react";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { green, red } from "@mui/material/colors";
import DoneIcon from "@mui/icons-material/Done";
import { deletetask, completetask } from "../Reducer";

const Show = () => {
  const state = useSelector((state) => state.TODO);

  const dispatch = useDispatch();

  return (
    <div>
      {state.map(({ txt, id, completed }) => (
        <>
          <Box
            sx={{ flexGrow: 1 }}
            style={{
              paddingLeft: "10px",
              padding: "15px",
              fontSize: "25px",
              fontFamily: "Times New Roman', Times, serif",
              fontWeight: "bolder",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <Grid container spacing={2} key={id} id={id}>
              <Grid item xs={8}>
                <List>
                  <List.Item className={`list ${completed ? "complete" : ""}`}>
                    {txt}{" "}
                  </List.Item>
                </List>
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  sx={{ bgcolor: green[500] }}
                  className="btn btn"
                  onClick={() =>
                    dispatch(
                      completetask({
                        id: id,
                        completed: !completed,
                      })
                    )
                  }
                >
                  {" "}
                  <DoneIcon />
                </Avatar>
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  className="btn btn"
                  onClick={() => dispatch(deletetask(id))}
                >
                  {" "}
                  <DeleteIcon />
                </Avatar>
              </Grid>
            </Grid>
          </Box>{" "}
        </>
      ))}
    </div>
  );
};

export default Show;
