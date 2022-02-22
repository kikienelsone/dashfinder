import React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {Link} from "react-router-dom";

const Tables = (props, {searchItems}, {getItem}, {sort}) => {

    const renderTable = searchItems(props.tests,props.search).map(row =>
        <TableRow>
            <TableCell component="th" scope="row">{row.name}</TableCell>
            <TableCell align="right">{row.type}</TableCell>
            <TableCell  align="right">{row.status}</TableCell>
            <TableCell align="right">{getItem(row.siteId)}
                <button className="btn"><Link className="btn-res" to="/finalize">Finalize</Link></button>

            </TableCell>

        </TableRow>
    )

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => {sort("name")}} align="right">name</TableCell>
                            <TableCell onClick={() => {sort("type")}} align="right">type</TableCell>
                            <TableCell align="right">status</TableCell>
                            <TableCell onClick={() => {sort("site")}} align="right">site</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {renderTable}

                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    );
};

export default Tables;