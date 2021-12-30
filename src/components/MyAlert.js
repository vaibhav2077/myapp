import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
export default function MyAlert(props) {
  if (props.message) {
    return (
      <div>
        <Alert variant="success">{props.message}</Alert>
      </div>
    );
  } else {
    return <></>;
  }
}
