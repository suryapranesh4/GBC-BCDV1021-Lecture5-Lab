import { Button } from '@material-ui/core';
import React from 'react';
import "./App.css";

const Exercise = () => {
    var ipsumText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.";
  return (
    <div className="exercise">
        <Button variant="contained" color="primary">BUTTON</Button>
        <div>{ipsumText}</div>
    </div>
  )
}

export default Exercise;
