import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Card, CardTitle, CardHeader, CardBody, CardText } from "reactstrap";

const Login = (props) => {
  return (
    <Card body outline color="secondary">
    <CardText>
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
    </Form>
    </CardText>
    <Button className="login">Login</Button>
    </Card> 
  );
}

export default Login;