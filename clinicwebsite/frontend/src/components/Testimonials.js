import React, { Component, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import { Button, Toast, ToastHeader, ToastBody, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi"
import testimonial from "../testimonials.png"
import general from "../cleaningteeth.jpg"
import cosmetic from "../Porcelain-Veneers-Smiles-of-Chandler-AZ.webp"
import surgical from "../Dental-implant-illustration.jpg"
import { MDBRipple } from 'mdb-react-ui-kit';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsInstagram } from "react-icons/bs"
import { AiOutlineLinkedin } from "react-icons/ai"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import MultiStepForm from "../components/MultiStepForm";
import {getDocs } from "firebase/firestore";




//Janice fernandes

import "../App.css"



const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const items1 = [];



class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      isOpen: false, isOpenG: false, isOpenC: false, isOpenS: false,
      activeIndex: 0,
      hover: false,
      hover1: false,
      hover2: false,
      opacity: 1,
      todo:"placeholder",
      todos:[],
      testimonials:0
      
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
    this.addTodo = this.addTodo.bind(this);
    this.fetchPost = this.fetchPost.bind(this);
  }
  onMouseEnter = () => { this.setState({ isOpen: true }); };
  onMouseLeave = () => { this.setState({ isOpen: false }); };
  onMouseEnterG = () => { this.setState({ isOpenG: true }); };
  onMouseLeaveG = () => { this.setState({ isOpenG: false }); };
  onMouseEnterC = () => { this.setState({ isOpenC: true }); };
  onMouseLeaveC = () => { this.setState({ isOpenC: false }); };
  onMouseEnterS = () => { this.setState({ isOpenS: true }); };
  onMouseLeaveS = () => { this.setState({ isOpenS: false }); };
  componentDidMount() {
    this.fetchPost();


  }
  fetchPost = async () => {
    
    try {
      await getDocs(collection(db, "testimonials"))
    .then((querySnapshot)=>{               
        const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
        // this.setState({todos:newData});
      
        console.log("hi from inside fetch before",newData);

        newData.map((testimonial, i) => {
          console.log(i+3)
            items1.push({
              id: i+3,
              headertext: testimonial.headertext,
              text: testimonial.text,
              person: testimonial.person
              }
              )
      
              
      
        });

        console.log("hi from inside fetch",items1);
            this.setState({testimonials:items1})

                     
        
        
    })
    } catch (e) {
      console.error("Error retrieving document: ", e);
    }
  
}
  onHover = (e) => {
    e.preventDefault();

    console.log("hovering");
    this.setState({ opacity: 0.2, hover: true });

  };
  addTodo = async (e) => {
    e.preventDefault();
    console.log(this.state.todo)  
   
    try {
        const docRef = await addDoc(collection(db, "todos"), {
          todo: this.state.todo,    
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
  onHoverOver = (e) => {
    e.preventDefault();
    this.setState({ hover: false });
  };
  onHover1 = (e) => {
    e.preventDefault();
    console.log("hovering");
    this.setState({ opacity: 0.2, hover1: true });

  };
  onHoverOver1 = (e) => {
    e.preventDefault();
    this.setState({ hover1: false });
  };
  onHover2 = (e) => {
    e.preventDefault();
    console.log("hovering");
    this.setState({ opacity: 0.2, hover2: true });

  };
  onHoverOver2 = (e) => {
    e.preventDefault();
    this.setState({ hover2: false });
  };

  onExiting() { this.animating = true; }
  onExited() { this.animating = false; }
  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items1.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items1.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      
      <div>
        
       

        {console.log(items1)}

        <Navbar color="secondary" style={{ color: "white" }}>
          <NavbarBrand href="/" style={{ color: "white", fontFamily: "Playfair Display", fontSize: "30px" }} >Dr Sandhya's Total Dental Care</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Nav className="ms-auto">
            <NavItem >
              <NavLink href="/about" style={{ color: "white", fontFamily: "Playfair Display", fontSize: "20px" }}>About</NavLink>
            </NavItem>

            <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.isOpen}>
              <DropdownToggle nav caret style={{ color: "white", fontFamily: "Playfair Display", fontSize: "20px" }}>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <Dropdown direction="left" onMouseOver={this.onMouseEnterG} onMouseLeave={this.onMouseLeaveG} isOpen={this.state.isOpenG}>
                  <DropdownToggle nav >General</DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem href="/cleaningexams">Cleanings and Exams</DropdownItem>

                    <DropdownItem href="/crowns">Crowns</DropdownItem>
                    <DropdownItem href="/extractions">Tooth Extractions</DropdownItem>
                    <DropdownItem href="/gumtherapy">Gum Therapy</DropdownItem>
                    <DropdownItem href="/bondingfillings">Bonding and White Fillings</DropdownItem>
                    <DropdownItem href="/dentures">Dentures</DropdownItem>
                    <DropdownItem href="/nightguards">Night Guards</DropdownItem>
                    <DropdownItem>Family Dentistry</DropdownItem>
                    <DropdownItem >Emergency Care</DropdownItem>
                  </DropdownMenu>
                </Dropdown >
                <DropdownItem divider />
                <Dropdown direction="left" onMouseOver={this.onMouseEnterC} onMouseLeave={this.onMouseLeaveC} isOpen={this.state.isOpenC}>
                  <DropdownToggle nav>Cosmetic</DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem href="/invisalign">InvisAlign</DropdownItem>

                    <DropdownItem href="/teethwhitening">Teeth Whitening</DropdownItem>
                    <DropdownItem href="/bondingfillings">Bonding</DropdownItem>
                    <DropdownItem href="/veneers">Veneers</DropdownItem>
                    <DropdownItem href="/smilemakeover">Smile Makeover</DropdownItem>
                    <DropdownItem href="/gummysmilereduction">Gummy Smile Reduction</DropdownItem>
                    <DropdownItem>Full Mouth Rehabilitation</DropdownItem>
                  </DropdownMenu>
                </Dropdown >
                <DropdownItem divider />
                <Dropdown direction="left" onMouseOver={this.onMouseEnterS} onMouseLeave={this.onMouseLeaveS} isOpen={this.state.isOpenS}>
                  <DropdownToggle nav>Surgical</DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem href="/implants">Implants</DropdownItem>
                    <DropdownItem href="/extractions">Extractions</DropdownItem>
                    <DropdownItem href="/rootcanal">Root Canal</DropdownItem>
                    <DropdownItem href="/bonegraft">Bone Graft</DropdownItem>
                    <DropdownItem href="/implantsupporteddentures">Implant-supported Dentures</DropdownItem>
                    <DropdownItem href="/bridges">Bridges</DropdownItem>
                    <DropdownItem href="/overdentures">Over Dentures</DropdownItem>
                    <DropdownItem href="/samedayimplants">Same day Implants</DropdownItem>
                  </DropdownMenu>
                </Dropdown >
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: "white", fontFamily: "Playfair Display", fontSize: "20px" }}>Doctor Login</NavLink>
            </NavItem>
            <Button active color="light" style={{ fontFamily: "Playfair Display", fontSize: "20px"}}>
              Book an appointment
            </Button>
          </Nav>

          
        </Navbar>


        <br></br><br></br><br></br>


        <div class="container-fluid" style={{ height: "300px" }}>
        <div style={{ fontFamily: "Playfair Display", fontSize: "35px", color:"silver" }}>
                 Here's what our patients have to say (All Testimonials):
              </div>
              <div style={{ fontFamily: "Playfair Display", fontSize: "20px", color:"silver", textAlign:"right", padding:"20px", textDecorationColor:"silver" }}>
                 {items1.length} results
              </div>
           {console.log("see all items",items1)}

           <div class="row justify-content-center" style={{ maxHeight: "650px",
    overflowY: "scroll", padding:"20px" }}>
            {items1.map((item) => { 

              console.log("we're at display", item) 
       return ( 
        
        
        //   <div class="row justify-content-center" style={{ height: "600px", padding:"20px" }}>

            <div class=" col-lg-8 ">
              <div class="card" >
                <p class="post">
                  <span><img class="quote-img" src="https://i.imgur.com/i06xx2I.png" /></span>
                   <span class="post-txt">{item.headertext}<br></br>{item.text}</span>
                  <span><img class="nice-img" src="https://i.imgur.com/l5AkSHd.png" /></span>
                  </p>
                  </div>
              <div class="arrow-down"></div>
              <div style={{ fontFamily: "Playfair Display", fontSize: "25px", color:"silver" }}>
                 {item.person} 
              </div>
              
               
            </div>
        //   </div>
     

       
        
       ); 
    })
   
     }
     </div> 
          
        </div>

        <br></br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        



        <ListGroup horizontal style={{ marginTop:"30px", width: "100%", backgroundColor: "black", padding:"30px" }}>
          <ListGroup.Item style={{backgroundColor: "black" }}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.627340847596!2d72.94237301412522!3d19.167783054063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f7c2d76931%3A0xa2d85150fddd96c8!2sDr%20Sandhya&#39;s%20Total%20Dental%20Care!5e0!3m2!1sen!2sin!4v1670239514055!5m2!1sen!2sin" style={{ width: "900px", height: "250px", border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", padding: "20px" }}></iframe></ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "Playfair Display", backgroundColor: "black", color:"white", fontSize:"20px", width:"400px" }}><div style={{fontSize:"30px"}}>Visit Us</div> <br></br>Shop #9, Saidham Complex, <br></br>P.K road, Mulund West <br></br>Mumbai - 400080<br></br><br></br>Mon - Sat: <br></br>10am to 2pm,  6pm to 9pm</ListGroup.Item>

        </ListGroup>








        <Navbar color="secondary">
          {/* <NavbarBrand href="/" style={{color:"white", fontFamily:"Playfair Display", fontSize:"30px"}} >Social</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          {/* <Collapse isOpen={this.state.isOpen} > */}
          <Nav >
            <NavItem></NavItem>

            <ListGroup >
              <ListGroup.Item style={{ fontFamily: "Playfair Display", color: "white", backgroundColor: "grey" }}>
                <NavItem style={{ padding: "20px", paddingRight: "80px", rightMargin: "70px", fontFamily: "Playfair Display", fontSize: "30px", backgroundColor: "grey" }}>Social</NavItem><br></br><br></br><BsInstagram size="45px" style={{ padding: "5px" }} /> <AiOutlineLinkedin size="50px" style={{ padding: "3px" }} /></ListGroup.Item>
            </ListGroup>
            <NavItem></NavItem>
            <ListGroup>
              <ListGroup.Item style={{ fontFamily: "Playfair Display", color: "white", backgroundColor: "grey" }}> <NavItem style={{ padding: "20px", paddingRight: "80px", rightMargin: "70px", fontFamily: "Playfair Display", fontSize: "30px", backgroundColor: "grey" }}>Services</NavItem><br></br><br></br>
                <NavLink href="/components" style={{ color: "white" }}>General</NavLink>
                <NavLink href="/components" style={{ color: "white" }}>Cosmetic</NavLink>
                <NavLink href="/components" style={{ color: "white" }}>Surgical</NavLink><br></br><br></br></ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroup.Item style={{ fontFamily: "Playfair Display", color: "white", backgroundColor: "grey" }}> <NavItem style={{ padding: "20px", paddingRight: "80px", rightMargin: "70px", fontFamily: "Playfair Display", fontSize: "30px", backgroundColor: "grey" }}>Our Office</NavItem><br></br><br></br>
                <NavLink href="/components" style={{ color: "white" }}>Home</NavLink>
                <NavLink href="/components" style={{ color: "white" }}>About</NavLink>
                <NavLink href="/components" style={{ color: "white" }}>Doctor Login</NavLink><br></br><br></br></ListGroup.Item>
            </ListGroup>
            <NavItem></NavItem>
            <ListGroup>
              <ListGroup.Item style={{ fontFamily: "Playfair Display", color: "white", backgroundColor: "grey" }}> <NavItem style={{ padding: "20px", paddingRight: "80px", rightMargin: "70px", fontFamily: "Playfair Display", fontSize: "30px", backgroundColor: "grey" }}>Contact Us</NavItem>Call (+91) 9833630985<br></br><br></br>Shop #9, Saidham Complex, <br></br>P.K road, Mulund West <br></br>Mumbai - 400080<br></br><br></br>Mon - Sat: <br></br>10am to 2pm,<br></br>6pm to 9pm</ListGroup.Item>
            </ListGroup>




          </Nav>


        </Navbar>
        <div className="text"  style={{ paddingLeft: "750px", color: "white", fontFamily: "Playfair Display", fontSize: "15px", fontStyle: "italic", backgroundColor:"grey"}}>@ Dr Sandhya's Total Dental Care  |  Copyright: 2022  | Designed by: Prakriti Shetty</div>


        


      </div>
    );
  }

}

export default App;