import React from 'react';
import { useLocation, useParams } from "react-router-dom";

const Index = () => {
    let { id } = useParams();
    return (
        <div>
            <p>{id}</p>
        </div>
    );
}

export default Index;