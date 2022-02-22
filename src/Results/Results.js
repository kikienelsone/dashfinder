import React from 'react';
import {Link} from "react-router-dom";
import "../Finalize/Finalize.css"

const Results = () => {
    return (
        <div>
            <h1 className="results">Results</h1>
            <p className="content">Order basket redesing</p>
            <Link className="link" to="/">back</Link>

        </div>
    );
};

export default Results;