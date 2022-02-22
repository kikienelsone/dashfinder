import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import "./Filter.css"
import Search from "../Search/Search";
import Results from "../Results/Results";
import Finalize from "../Finalize/Finalize";
import {Link} from "react-router-dom";

const Filter = (props) => {

    const [sort, setSort] = useState({})
    const [search, setSearch] = useState([])



    const handleInput = (searchValue) => setSearch(searchValue)

const searchItems = (tests, search) => {
    if (search.length === 0) {
        return tests
    }
    return tests.filter(item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
}


    const getItem = (siteId) => {
        let site = props.sites.find(item => item.id === siteId)
        return site ? site.url : ""
    }


    function sorting (filter) {
        const copyTest = props.tests
        const sortedTests = copyTest.sort((a, b) => {
            return a[filter] > b[filter] ? 1 : -1
        })
        setSort(sortedTests)
    }


    return (
        <div>
           <Search handleInput={handleInput}/>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead className="table">
                        <TableRow>
                            <TableCell onClick={() => {sorting("name")}}>name</TableCell>
                            <TableCell onClick={() => {sorting("type")}} align="right">type</TableCell>
                            <TableCell align="right">status</TableCell>
                            <TableCell  onClick={() => {sorting("site")}} align="right">site</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {searchItems(props.tests, search).map(row =>
                            <TableRow className="td">
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell className="status" align="right">{row.status}</TableCell>
                                <TableCell align="right">{getItem(row.siteId)}
                                    <button className="btn" >
                                        {row.status === "DRAFT" ? (
                                            <Link className="btn-fin" to="/finalize">Finalize</Link>
                                            ):(
                                            <Link className="btn-res" to="/results">Result</Link>
                                            )}
                                    </button>

                                </TableCell>

                            </TableRow>
                        )}

                    </TableBody>

                </Table>
            </TableContainer>


        </div>
    )
}

export default Filter;