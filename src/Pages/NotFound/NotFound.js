import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height:"500px"}} className="box d-flex justify-content-center align-items-center">
            <div>
                <h3 className="mb-5">404! Page Not Found</h3>
                <Link to="/"><Button variant="info">Go Back</Button></Link>
            </div>
        </div>
    );
};

export default NotFound;