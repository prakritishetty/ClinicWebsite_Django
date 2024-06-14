import React, { Component } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


class UserDetails extends Component{

    constructor(props) {
        super(props);
        
    this.back = this.back.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
}

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        console.log(this.props.inputValues)
        return( <Container>
            
                    {/* <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label className="label">First Name</Form.Label>
                                <Form.Control
                                type="text"
                                defaultValue={this.props.inputValues.firstName}
                                name="firstName"
                                required
                                onChange={this.props.handleChange}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label className="label">Last Name</Form.Label>
                                <Form.Control
                                type="text"
                                defaultValue={this.props.inputValues.lastName}
                                name="lastName"
                                required
                                onChange={this.props.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formEmail">
                            <Form.Label className="label">Email Address</Form.Label>
                            <Form.Control
                            type="email"
                            defaultValue={this.props.inputValues.email}
                            name="email"
                            required
                            onChange={this.props.handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
                    </Form> */}
                    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                </Container>
        );
    }
}

export default UserDetails;