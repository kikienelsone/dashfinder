import React from 'react';
import {Link} from "react-router-dom";
import "../Results/Results.css"

const Finalize = () => {
    return (
        <div>
            <h1 className="finalize">Finalize</h1>
            <p className="content">Spring promotion</p>
            <Link className="link" to="/">back</Link>

        </div>
    );
};

export default Finalize;