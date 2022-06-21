import React from 'react';

function Render({ when, children, fallback }) {
    return (<>{when ? children : fallback}</>);
}

export default Render;
