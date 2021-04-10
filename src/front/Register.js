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
import Footer from "../components/Footer/Footer"

class Register extends React.Component {
  state = {};
  render() {
    return (
      <>
      <MainNavbar />
      <main>
        <div>
        <section className="section section-shaped">
        <div className="shape shape-style-1 shape-default">
            <Container className="landing-container d-flex align-items-center">
            <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                    <Col className="text-center mt-md-5 mt-lg-0 mt-xs-5" lg="6">

                    <Card className="shadow-lg p-3 border-0 login-card">
                        <div className="p-5">
                        <Row className="text-center">
                        <Col lg="12" className="text-center">
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
                            <Button className="login btn-lg">Signup</Button>
                          </Form>
                        </Col>
                        </Row>
                        </div>
                    </Card>

                    </Col>
                </Row>
            </div>
            </Container>
            </div>

        </section>
        </div>
      </main>
      <Footer />

      </>
    );
  }
}

export default Register;