import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import myApi from "../../Api";
import BlaBla from "./Box";

export const Admin = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(null);
  const [counter1, setCounter1] = useState(null);
  const [counter2, setCounter2] = useState(null);
  const [counter3, setCounter3] = useState(null);
  const [open, setOpen] = useState(null);
  useEffect(() => {
    myApi
      .apiGet()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  let count = 0;
  useEffect(() => {
    setCounter(count);
  }, [count]);
  let count1 = 0;
  useEffect(() => {
    setCounter(count1);
  }, [count1]);
  let count2 = 0;
  useEffect(() => {
    setCounter(count2);
  }, [count2]);
  let count3 = 0;
  useEffect(() => {
    setCounter(count3);
  }, [count3]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ФИО</TableCell>
            <TableCell align="right">Возраст</TableCell>
            <TableCell align="right">Электронная почта</TableCell>
            <TableCell align="right">Номер телефона</TableCell>
            <TableCell align="right">Место жительства</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((u) => {
            if (u.opros == "Из интернета") {
              count += 1;
            }
            if (u.opros == "От знакомых") {
              count1 += 1;
            }
            if (u.opros == "Из прессы и ТВ") {
              count2 += 1;
            }
            if (u.opros == "Зашли на сайт случайно") {
              count3 += 1;
            }
            return (
              <BlaBla user={u}
             
         
              setText={(data)=>setText(data)}
              setUsers={(data)=>setUsers(data)}
              text={text}/>
            );
          })}
        </TableBody>
      </Table>
      
      <BarChart 
        xAxis={[
          {
            id: "barCategories",
            data: [
              "Из интернета",
              "От знакомых",
              "Из прессы и ТВ",
              "Случайно зашли на сайт",
            ],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [count, count1, count2, count3],
          },
        ]}
        width={800}
        height={300}
      />
    </TableContainer>
  );
};
