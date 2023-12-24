import React, {Component, creatContext} from "react";
import {Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import {Button, Toast, ToastHeader, ToastBody, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import Accordion from "react-bootstrap/Accordion"
import testimonial from "../testimonials.png"
import ListGroup from 'react-bootstrap/ListGroup';
import {BsInstagram} from "react-icons/bs"
import {AiOutlineLinkedin} from "react-icons/ai"
import "./extractions.css"
import fallingtooth from "./fallingtooth.png" 
import gums from "./gums.png" 
import {Field, Form, Formik} from "formik"
import {Card, CardContent} from '@material-ui/core'
import {CheckboxWithLabel, TextField} from 'formik-material-ui'

// const FormContext = createContext({})

class App extends Component{

    constructor(props)
    {
        super(props);
        this.state = ({
            isOpen: false, isOpenG: false, isOpenC: false, isOpenS: false, 
            activeIndex: 0,
            hover:false,
            hover1:false,
            hover2:false,
            opacity:1,
            open:1
        });
        this.onHover = this.onHover.bind(this);
        this.onHoverOver = this.onHoverOver.bind(this);
        this.onHover1 = this.onHover1.bind(this);
        this.onHoverOver1 = this.onHoverOver1.bind(this);
        this.onHover2 = this.onHover2.bind(this);
        this.onHoverOver2 = this.onHoverOver2.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onMouseEnter = () => { this.setState({isOpen: true}); };
    onMouseLeave = () => {this.setState({isOpen: false});};
    onMouseEnterG = () => {this.setState({isOpenG: true});};
    onMouseLeaveG = () => {this.setState({isOpenG: false});};
    onMouseEnterC = () => {this.setState({isOpenC: true});};
    onMouseLeaveC = () => {this.setState({isOpenC: false});};
    onMouseEnterS = () => {this.setState({isOpenS: true});};
    onMouseLeaveS = () => {this.setState({isOpenS: false});};
    onHover= (e) => {
        e.preventDefault();
        
        console.log("hovering");
        this.setState({opacity:0.2, hover: true});
        
      };
    onHoverOver = (e) => {
        e.preventDefault();
        this.setState({ hover: false});
      };
    onHover1= (e) => {
        e.preventDefault();
        console.log("hovering");
        this.setState({opacity:0.2, hover1: true});
        
      };
    onHoverOver1 = (e) => {
        e.preventDefault();
        this.setState({hover1: false});
      };
    onHover2= (e) => {
        e.preventDefault();
        console.log("hovering");
        this.setState({opacity:0.2, hover2: true});
        
      };
    onHoverOver2 = (e) => {
        e.preventDefault();
        this.setState({hover2: false});
      };

    onExiting() {this.animating = true;}
    onExited()  {this.animating = false;}    
    // next() {
    //     if (this.animating) return;
    //     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    //     this.setState({ activeIndex: nextIndex });
    // }
    // previous() {
    //   if (this.animating) return;
    //   const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    //   this.setState({ activeIndex: nextIndex });
    // }
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }

    
    toggle = (id) => {
    if (this.open === id) {
        this.setState({ open: 0 });
    } else {
        this.setState({ open: id });
    }
    };

    
    render()
    {
        const { activeIndex } = this.state;
        
       
        

        // const slides = items.map((item) => {
        //   return (
        //     <CarouselItem
        //       onExiting={this.onExiting}
        //       onExited={this.onExited}
        //       key={item.id}
        //       style={{color:"black", fontFamily:"Marck Script"}}
        //       className="text-secondary"

        //     >
            
        //     <img src={testimonial} alt={item.altText} style={{width:"2720px", height:"350px"}}/>
            
              
        //     <CarouselCaption captionText={item.caption} captionHeader={item.caption} className="text-secondary" style={{padding:"10px", fontFamily:"Marck Script"}} />
        //     </CarouselItem>
        //   );
        // });

        return(

            
        <div>
                    <Navbar color="secondary" style={{color:"white"}}>
                        <NavbarBrand href="/" style={{color:"white", fontFamily:"Arizonia", fontSize:"35px"}}>Book Appointment</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                            {/* <Collapse isOpen={this.state.isOpen} > */}
                                <Nav className="ms-auto">
                                    <NavItem >
                                        <NavLink href="/components/" style={{color:"white"}}>About</NavLink>
                                    </NavItem>
                                    
                                    <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.isOpen}>
                                      <DropdownToggle nav caret style={{color:"white"}}>
                                        Services
                                      </DropdownToggle>
                                        <DropdownMenu right>
                                            <Dropdown direction="left" onMouseOver={this.onMouseEnterG} onMouseLeave={this.onMouseLeaveG} isOpen={this.state.isOpenG}>
                                            <DropdownToggle nav >General</DropdownToggle>
                                                <DropdownMenu >
                                                    <DropdownItem>Cleanings and Exams</DropdownItem>
                                                    
                                                    <DropdownItem>Crowns</DropdownItem>
                                                    <DropdownItem>Tooth Extractions</DropdownItem>
                                                    <DropdownItem>Gum Therapy</DropdownItem>
                                                    <DropdownItem>Bonding and White Fillings</DropdownItem>
                                                    <DropdownItem>Dentures</DropdownItem>
                                                    <DropdownItem>Night Guards</DropdownItem>
                                                    <DropdownItem>Family Dentistry</DropdownItem>
                                                    <DropdownItem>Emergency Care</DropdownItem>    
                                                </DropdownMenu>
                                            </Dropdown >
                                            <DropdownItem divider />
                                            <Dropdown direction="left" onMouseOver={this.onMouseEnterC} onMouseLeave={this.onMouseLeaveC} isOpen={this.state.isOpenC}>
                                            <DropdownToggle nav>Cosmetic</DropdownToggle>
                                                <DropdownMenu >
                                                    <DropdownItem>InvisAlign</DropdownItem>
                                                    
                                                    <DropdownItem>Teeth Whitening</DropdownItem>
                                                    <DropdownItem>Bonding</DropdownItem>
                                                    <DropdownItem>Veneers</DropdownItem>
                                                    <DropdownItem>Smile Makeover</DropdownItem>
                                                    <DropdownItem>Gummy Smile Reduction</DropdownItem>
                                                    <DropdownItem>Full Mouth Rehabilitation</DropdownItem>   
                                                </DropdownMenu>
                                            </Dropdown >
                                            <DropdownItem divider />
                                            <Dropdown direction="left" onMouseOver={this.onMouseEnterS} onMouseLeave={this.onMouseLeaveS} isOpen={this.state.isOpenS}>
                                            <DropdownToggle nav>Surgical</DropdownToggle>
                                                <DropdownMenu >
                                                    <DropdownItem>Implants</DropdownItem>
                                                    <DropdownItem>Extractions</DropdownItem>
                                                    <DropdownItem>Root Canal</DropdownItem>
                                                    <DropdownItem>Bone Graft</DropdownItem>
                                                    <DropdownItem>Implant-supported Dentures</DropdownItem>
                                                    <DropdownItem>Bridges</DropdownItem>
                                                    <DropdownItem>Over Dentures</DropdownItem>
                                                    <DropdownItem>Same day Implants</DropdownItem>   
                                                </DropdownMenu>
                                            </Dropdown >
                                        </DropdownMenu>
                                    </Dropdown>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:"white"}}>Doctor Login</NavLink>
                                    </NavItem>
                                    <Button active color="light">
                                        Book an appointment
                                    </Button>
                                </Nav>
                                
                            {/* </Collapse> */}
                        </Navbar>
                        <Card>
                          <CardContent>
                            <Formik initialValues={{
                              firstName:'',
                              lastName:'',
                              millionaire:false,
                              money:0,
                              description:''
                            }} onSubmit={()=>{}}>
                            <Form>
                              <Field name="firstName" component={TextField} label="First Name" />

                            </Form>
                            </Formik>
                          </CardContent>
                        </Card>
                        </div>
        );
    }
  }
  export default App;