import React from "react";
import { Link } from "react-router-dom";

import {
  Card,  CardTitle, CardText,
  CardSubtitle,
  Button,
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

import LoginNavBar from "../components/Menu/LoginNavBar";
import Footer from "../components/Footer/Footer"

class Listing extends React.Component {
  state = {};
  render() {
    return (
      <>
      <LoginNavBar />
      <main>
        <section className="section pb-0 mb-5">
          <Container>
            <Row>
              <Col md="4">
                <Card body>
                  <CardTitle tag="h5">Search</CardTitle>
                  <CardText>
                    <Form>
                      <FormGroup>
                        <Input type="text" name="search" id="search" placeholder="Search location" />
                      </FormGroup>
                    </Form>
                  </CardText>
                  <Button>Search</Button>
                </Card>
              </Col>
              <Col md="8">
                <Card body>
                    <div class="d-flex">
                    <div class="mr-auto p-2">
                          <CardTitle tag="h5">Listing title</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">Posted on: 20-04-21</CardSubtitle>
                        </div>
                        <div class="p-2"> 
                        
                          £1,500 pcm
                        </div>
                    </div>

                    <CardText>
                      <Row>
                        <Col md="4">
                          <img width="100%" src="https://www.thespruce.com/thmb/EvdqR5HNV6Ev9RBv8qGqHNE8DoM=/3636x2045/smart/filters:no_upscale()/how-to-arrange-living-room-furniture-1976578-hero-c99074dcad854b669b91652046a39203.jpg" alt="Card image cap" />
                        </Col>
                        <Col md="8">
                          Description of the listing will go here.
                        </Col>
                      </Row>
                    </CardText>
                </Card>
                <Card body className="mt-3">
                <div class="d-flex">
                    <div class="mr-auto p-2">
                          <CardTitle tag="h5">Listing title</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">Posted on: 20-04-21</CardSubtitle>
                        </div>
                        <div class="p-2"> 
                        
                          £1,500 pcm
                        </div>
                    </div>

                    <CardText>
                      <Row>
                        <Col md="4">
                          <img width="100%" src="https://www.thespruce.com/thmb/EvdqR5HNV6Ev9RBv8qGqHNE8DoM=/3636x2045/smart/filters:no_upscale()/how-to-arrange-living-room-furniture-1976578-hero-c99074dcad854b669b91652046a39203.jpg" alt="Card image cap" />
                        </Col>
                        <Col md="8">
                          Description of the listing will go here.
                        </Col>
                      </Row>
                    </CardText>
                </Card>
              </Col>
            </Row>
              
          </Container>
        </section>
      </main>
      <Footer />
      </>
    );
  }
}

export default Listing;