import React from "react";
import Login from "./Login";
import Footer from "../components/Footer/Footer";
// reactstrap components
import { Container, Row, Col, Card, CardTitle, CardText, Button, CardHeader, CardBody, Form, FormGroup, Label, Input, Badge } from "reactstrap";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlug, faSearchLocation, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

function Landing() {
  return (
    <>
    <main>
        <div>
        <section className="section section-shaped">
            <div className="shape shape-style-1 shape-default">
            <Container className="landing-container d-flex align-items-center">
            <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                    <Col className="text-center" lg="4">
                        <Login />
                    </Col>
                    <Col className="text-center mt-md-5 mt-lg-0 mt-xs-5" lg="8">

                    <Card className="gradient-landing shadow-lg p-3 border-0">
                        <div className="p-5">
                        <Row className="align-items-center">
                        <Col lg="8" className="text-left">
                            <h3>
                            Flat finding made easy
                            </h3>
                            <p className="mt-3">
                            Making accomdation search easy and convenient.
                            </p>
                        </Col>
                        <Col className="ml-lg-auto" lg="4">
                            <Button className="register btn btn-lg btn-block">
                            Register Now!
                            </Button>
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
        <section className="section pt-5">
        <Container>
                <Row className="justify-content-center">
                <Col lg="12">
                    <Row className="row-grid">
                    <Col lg="4" className="mb-md-5 mb-lg-0 mb-xs-5"> 
                        <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <div class="steps shadow">
                            <FontAwesomeIcon icon={faSignInAlt} />
                            </div>
                            <p className="mt-3 text-center">
                            This is the first step
                            </p>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" className="mb-md-5 mb-lg-0 mb-xs-5">
                        <Card className="card-lift-hover shadow border-0 ">
                        <CardBody className="py-5">
                            <div class="steps shadow">
                            <FontAwesomeIcon icon={faPlug} />
                            </div>
                            <p className="mt-3 text-center">
                            This is what you do in step 2
                            </p>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" className="mb-md-5 mb-lg-0 mb-xs-5">
                        <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <div class="steps shadow">
                            <FontAwesomeIcon icon={faSearchLocation} />
                            </div>
                            <p className="mt-3 text-center">
                            This is what you do in step 3
                            </p>
                        </CardBody>
                        </Card>
                    </Col>
                    </Row>
                </Col>
                </Row>
            </Container>
        </section>

        <section className="section section-feedback pb-0">
        <Container>
            <div className="m-auto pt-1">
            <blockquote class="blockquote text-center">
            <p class="mb-0 feedback">Looking for accomdation at short notice has never been any easier for me. This feature has helped me relocate for my job quickly and easily.</p>
            <footer class="blockquote-footer feedback-name">
                John
                <br />
                <img class="img-fluid rounded-circle shadow-lg feedback-dp" src="https://st.depositphotos.com/1734074/4228/v/600/depositphotos_42286779-stock-illustration-vector-programmer-icon.jpg"></img>
            </footer>
            </blockquote>
            </div>
            
        </Container>
        </section>
        
        </main>
        <Footer />
    </>
  );
}

export default Landing;
