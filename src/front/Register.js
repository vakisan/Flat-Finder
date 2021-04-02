import React from "react";
import { Link } from "react-router-dom";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import MainNavbar from "../components/Menu/MainNavbar";

class Register extends React.Component {
  state = {};
  render() {
    return (
      <>
      <MainNavbar />
      <Form>
      <FormGroup>
        <Label for="exampleEmail" hidden>Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>
      </>
    );
  }
}

export default Register;