import React, {useEffect, useState} from 'react';
import "./Dashboard.css"
import Filter from "../Filter/Filter";
import Tables from "./Tables";

const Dashboard = () => {

    const [sites, setSites] = useState([])
    const [tests, setTests] = useState([])
    const [filter,setFilter] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/data.json")
            .then(response => response.json())
            .then(data => {
                setSites(data.sites)
                setTests(data.tests)

            })
    }, [])

    function sort (filter) {
        const copyTest = tests
        const sortedTests = copyTest.sort((a, b) => {
            return a[filter] > b[filter] ? 1 : -1
        })
        setFilter(sortedTests)
    }
    return (

        <div>
            <h1 className="dashboard">Dashboard</h1>
            <Filter  sites={sites} tests={tests} setSites={setSites} setTests={setTests}/>

        </div>
    )
}

export default Dashboard;