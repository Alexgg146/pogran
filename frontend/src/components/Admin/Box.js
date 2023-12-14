import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import myApi from "../../Api";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/base";
import { TextField } from "@mui/material";

export default function BlaBla({user,
    setText,
    setUsers,
    text}) {
    const [open, setOpen] = useState(null);

  return (
    <React.Fragment>
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(true)}
        >
          {open ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.age}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
      <TableCell align="right">{user.location}</TableCell>
      <TableCell>
        <IconButton>
          <DeleteIcon
            onClick={() => {
              myApi.deleteUser(user.id).then((data) => {
                setUsers((data) =>
                  data.filter((c) => c.id !== user.id)
                );
              });
            }}
          />
        </IconButton>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell
        style={{ paddingBottom: 0, paddingTop: 0 }}
        colSpan={6}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            {open && 
            <>
            <Typography variant="h6" gutterBottom component="div">
              History
            </Typography>
            <TableCell>
        <form
          onSubmit={(evt) => {
            setText("");
            return (
              text !== "" &&
              myApi.postEmail({ email: user.email, text: `${text}` })
            );
          }}
        >
          <TextField
            onInput={(evt) => {
              setText(evt.target.value);
            }}
          />
           <Button   type="submit">Отправить</Button>
        </form>                   
      </TableCell></>}
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </React.Fragment>
  );
}
