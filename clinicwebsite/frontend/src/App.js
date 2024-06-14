import React, { Component, useEffect, useRef } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import { Button, Toast, ToastHeader, ToastBody, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import { TfiCheckBox } from "react-icons/tfi"
import testimonial from "./testimonials.png"
import general from "./cleaningteeth.jpg"
import clinic1 from "./images/clinic1.jpg"
import freepik from "./images/freepikbg.jpg"
import testimonialsbg from "./images/testimonialsbg.jpeg"
import testbg2 from "./images/testbg2.jpeg"
import cosmetic from "./Porcelain-Veneers-Smiles-of-Chandler-AZ.webp"
import surgical from "./Dental-implant-illustration.jpg"
import { MDBRipple } from 'mdb-react-ui-kit';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsInstagram } from "react-icons/bs"
import { AiOutlineLinkedin } from "react-icons/ai"
import DriftScript from './components/widget'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase';
import MultiStepForm from "./components/MultiStepForm";
import {getDocs } from "firebase/firestore";
import TimeTable from "react-timetable-events";
import {Helmet} from "react-helmet";
import moment from "moment";
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import appointments from './demo-data/today-appointments';





//Janice fernandes

import "./App.css"

const HoverData = "Click or pinch to Zoom Image";

const images = [
  {
    url: './fallingtooth.png',
    title: 'GENERAL',
    width: '30%',
  },
  {
    url: 'clinicwebsite\frontend\public\static\images\fallingtooth.png',
    title: 'COSMETIC',
    width: '40%',
  },
  {
    url: 'clinicwebsite\frontend\public\static\images\fallingtooth.png',
    title: 'SURGICAL',
    width: '30%',
  },
];

// const myFunction() {
//   return "https://widget.tochat.be/bundle.js?key=d10e4e49-1258-4b15-af6e-e7bbf0df4f7b";    
// }

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
      isOpen: false, isOpenG: false, isOpenC: false, isOpenS: false, isOpenDoctorLogin: false,
      instance: React.createRef(),
      activeIndex: 0,
      hover: false,
      hover1: false,
      hover2: false,
      opacity: 1,
      todo:"placeholder",
      todos:[],
      testimonials:0,

      events: {
        monday: [
          {
            id: 1,
            name: "Homework",
            type: "custom",
            startTime: moment("2018-02-23T11:30:00"),
            endTime: moment("2018-02-23T13:30:00")
          },

          {
            id: 2,
            name: "Classwork",
            type: "custom",
            startTime: moment("2018-02-23T09:30:00"),
            endTime: moment("2018-02-23T11:00:00")
          },
          {
            id: 3,
            name: "Test",
            type: "custom",
            startTime: moment("2018-02-22T14:30:00"),
            endTime: moment("2018-02-22T15:30:00")
          },
          {
            id: 4,
            name: "Test",
            type: "custom",
            startTime: moment("2018-02-22T15:30:00"),
            endTime: moment("2018-02-22T16:30:00")
          }
        ],
        tuesday: [
          {
            id: 5,
            name: "Homework",
            type: "custom",
            startTime: moment("2018-02-22T09:30:00"),
            endTime: moment("2018-02-22T11:30:00")
          },
          {
            id: 6,
            name: "Classwork",
            type: "custom",
            startTime: moment("2018-02-23T12:00:00"),
            endTime: moment("2018-02-23T13:00:00")
          },
          {
            id: 7,
            name: "Classwork",
            type: "custom",
            startTime: moment("2018-02-23T13:30:00"),
            endTime: moment("2018-02-23T14:30:00")
          },
          {
            id: 8,
            name: "Classwork",
            type: "custom",
            startTime: moment("2018-02-23T15:30:00"),
            endTime: moment("2018-02-23T17:30:00")
          }
        ],
        wednesday: [
          {
            id: 7,
            name: "Classwork",
            type: "custom",
            startTime: moment("2018-02-23T13:30:00"),
            endTime: moment("2018-02-23T14:30:00")
          },
          {
            id: 4,
            name: "Test",
            type: "custom",
            startTime: moment("2018-02-22T15:30:00"),
            endTime: moment("2018-02-22T16:30:00")
          }
        ],
        thursday: [
          {
            id: 7,
            name: "Classwork",
            type: "custom",
            startTime: moment("2018-02-23T09:30:00"),
            endTime: moment("2018-02-23T12:30:00")
          },
          {
            id: 4,
            name: "Test",
            type: "custom",
            startTime: moment("2018-02-22T14:30:00"),
            endTime: moment("2018-02-22T18:30:00")
          }
        ],
        friday: [
          {
            id: 7,
            name: "Classwork",
            type: "custom",
            startTime: moment("2018-02-23T11:30:00"),
            endTime: moment("2018-02-23T14:30:00")
          },
          {
            id: 4,
            name: "Test",
            type: "custom",
            startTime: moment("2018-02-22T15:30:00"),
            endTime: moment("2018-02-22T16:30:00")
          }
        ],
        saturday: [
          {
            id: 7,
            name: "Classwork",
            type: "custom",
            startTime: moment("2018-02-23T08:30:00"),
            endTime: moment("2018-02-23T09:30:00")
          },
          {
            id: 4,
            name: "Test",
            type: "custom",
            startTime: moment("2018-02-22T16:30:00"),
            endTime: moment("2018-02-22T17:30:00")
          }
        ],
        sunday: []
      }
    
      
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
    this.myFunction = this.myFunction.bind(this);
    this.useScript = this.useScript.bind(this);
  }
  onMouseEnter = () => { this.setState({ isOpen: true }); };
  onMouseLeave = () => { this.setState({ isOpen: false }); };
  onMouseEnterG = () => { this.setState({ isOpenG: true }); };
  onMouseLeaveG = () => { this.setState({ isOpenG: false }); };
  onMouseEnterC = () => { this.setState({ isOpenC: true }); };
  onMouseLeaveC = () => { this.setState({ isOpenC: false }); };
  onMouseEnterS = () => { this.setState({ isOpenS: true }); };
  onMouseLeaveS = () => { this.setState({ isOpenS: false }); };
  onMouseEnterDoctorLogin = () => {this.setState({ isOpenDoctorLogin: true});};
  onMouseLeaveDoctorLogin = () => {this.setState({ isOpenDoctorLogin: false});};

  componentDidMount() {
    this.fetchPost();
   
    this.useScript();


  }

  useScript = url => {
    // useEffect(()=> {
    //   const scriptTag = document.createElement("script");

    //   scriptTag.src = "https://widget.tochat.be/bundle.js?key=d10e4e49-1258-4b15-af6e-e7bbf0df4f7b";

    //   this.state.instance.current.appendChild(scriptTag);
    // },[])
  };

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
  myFunction() {
    
      return (
        <>
          <script defer src="https://widget.tochat.be/bundle.js?key=d10e4e49-1258-4b15-af6e-e7bbf0df4f7b"></script>
        </>
      );
       
  }


  render() {
    const { activeIndex } = this.state;

    
    

    return (
      
      
      <div style={{paddingLeft:"0px" , marginLeft:"0px", backgroundImage:`url(${clinic1})`, backgroundPosition:"center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div ref={this.state.instance} />
        {/* {alert("hi!")} */}
        {/* {"https://widget.tochat.be/bundle.js?key=d10e4e49-1258-4b15-af6e-e7bbf0df4f7b"} */}
        
        {/* <div src="https://widget.tochat.be/bundle.js?key=d10e4e49-1258-4b15-af6e-e7bbf0df4f7b" style={{  height: "500px", zIndex:"2" }} /> */}
        {/* <Helmet>
                <script src="https://widget.tochat.be/bundle.js?key=d10e4e49-1258-4b15-af6e-e7bbf0df4f7b"></script>
                <script>
                  try{
                  Typekit.load({ async: true })
                  }
                  catch(e){}</script>
        </Helmet> */}
        {/* <script
            dangerouslySetInnerHTML={{ 
              __html:this.myFunction() 
        
            }}
        /> */}
        <myFunction />
        <Navbar style={{ color: "white",fontFamily: "Playfair Display", fontSize: "30px", position:"fixed" , width:"100%", zIndex:"1", paddingLeft:"0px" , marginLeft:"0px", backgroundColor:'rgba(0, 28, 40, 0.38)'}}>
          
          <NavbarBrand href="/" style={{ color: "white", fontFamily: "Playfair Display", fontSize: "30px", paddingLeft:"0px" , marginLeft:"0px"}} >Dr Sandhya's Total Dental Care</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Nav className="ms-auto">
          <NavItem style={{width:"200px"}}></NavItem>
            <NavItem >
              <NavLink onClick="" href="/about" style={{ color: "white", fontFamily: "Playfair Display", fontSize: "20px", backgroundColor:'rgba(0, 28, 40, 0.38)' }}>About</NavLink>
            </NavItem>

            <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.isOpen}>
              <DropdownToggle nav style={{ color: "white", fontFamily: "Playfair Display", fontSize: "20px", backgroundColor:'rgba(0, 28, 40, 0.38)', padding:"10px"}}>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <Dropdown direction="left" onMouseOver={this.onMouseEnterG} onMouseLeave={this.onMouseLeaveG} isOpen={this.state.isOpenG}>
                  <DropdownToggle nav style={{fontSize:"20px"}}>General</DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem href="/cleaningexams" style={{fontSize:"20px"}}>Cleanings and Exams</DropdownItem>

                    <DropdownItem href="/crowns" style={{fontSize:"20px"}}>Crowns</DropdownItem>
                    <DropdownItem href="/extractions" style={{fontSize:"20px"}}>Tooth Extractions</DropdownItem>
                    <DropdownItem href="/gumtherapy" style={{fontSize:"20px"}}>Gum Therapy</DropdownItem>
                    <DropdownItem href="/bondingfillings" style={{fontSize:"20px"}}>Bonding and White Fillings</DropdownItem>
                    <DropdownItem href="/dentures" style={{fontSize:"20px"}}>Dentures</DropdownItem>
                    <DropdownItem href="/nightguards" style={{fontSize:"20px"}}>Night Guards</DropdownItem>
                    <DropdownItem style={{fontSize:"20px"}}>Family Dentistry</DropdownItem>
                    <DropdownItem style={{fontSize:"20px"}}>Emergency Care</DropdownItem>
                  </DropdownMenu>
                </Dropdown >
                <DropdownItem divider />
                <Dropdown direction="left" onMouseOver={this.onMouseEnterC} onMouseLeave={this.onMouseLeaveC} isOpen={this.state.isOpenC}>
                  <DropdownToggle nav style={{fontSize:"20px"}}>Cosmetic</DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem href="/invisalign" style={{fontSize:"20px"}}>InvisAlign</DropdownItem>

                    <DropdownItem href="/teethwhitening" style={{fontSize:"20px"}}>Teeth Whitening</DropdownItem>
                    <DropdownItem href="/bondingfillings" style={{fontSize:"20px"}}>Bonding</DropdownItem>
                    <DropdownItem href="/veneers" style={{fontSize:"20px"}}>Veneers</DropdownItem>
                    <DropdownItem href="/smilemakeover" style={{fontSize:"20px"}}>Smile Makeover</DropdownItem>
                    <DropdownItem href="/gummysmilereduction" style={{fontSize:"20px"}}>Gummy Smile Reduction</DropdownItem>
                    <DropdownItem style={{fontSize:"20px"}}>Full Mouth Rehabilitation</DropdownItem>
                  </DropdownMenu>
                </Dropdown >
                <DropdownItem divider />
                <Dropdown direction="left" onMouseOver={this.onMouseEnterS} onMouseLeave={this.onMouseLeaveS} isOpen={this.state.isOpenS}>
                  <DropdownToggle nav style={{fontSize:"20px"}}>Surgical</DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem href="/implants" style={{fontSize:"20px"}}>Implants</DropdownItem>
                    <DropdownItem href="/extractions" style={{fontSize:"20px"}}>Extractions</DropdownItem>
                    <DropdownItem href="/rootcanal" style={{fontSize:"20px"}}>Root Canal</DropdownItem>
                    <DropdownItem href="/bonegraft" style={{fontSize:"20px"}}>Bone Graft</DropdownItem>
                    <DropdownItem href="/implantsupporteddentures" style={{fontSize:"20px"}}>Implant-supported Dentures</DropdownItem>
                    <DropdownItem href="/bridges" style={{fontSize:"20px"}}>Bridges</DropdownItem>
                    <DropdownItem href="/overdentures" style={{fontSize:"20px"}}>Over Dentures</DropdownItem>
                    <DropdownItem href="/samedayimplants" style={{fontSize:"20px"}}>Same day Implants</DropdownItem>
                  </DropdownMenu>
                </Dropdown >
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              {console.log("doctor login",this.state.isOpenDoctorLogin)}
              <NavLink on onMouseEnter={this.onMouseEnterDoctorLogin} onMouseLeave={this.onMouseLeaveDoctorLogin}  href="https://github.com/reactstrap/reactstrap" style={{ color: "white", fontFamily: "Playfair Display", fontSize: "20px", marginRight:"5px", backgroundColor:(this.state.isOpenDoctorLogin?'lightslategrey':'rgba(0, 28, 40, 0.38)')}}>Doctor Login</NavLink>
            </NavItem>
            <Button active color="light" style={{ fontFamily: "Playfair Display", fontSize: "20px"}}>
            <a href="/bookappointment" style={{ color:"black", textDecorationColor:"black"}}>Book an appointment</a>
            </Button>
          </Nav>
          </Navbar>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <div className="p-5 my-6 rounded" style={{ padding:"0px", margin:"0px", backgroundImage:`url(${clinic1})`
          , backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '90vh' }}>
          
          
          <div style={{ fontFamily: "Playfair Display", fontSize: "70px", align: "center", color: "white", backgroundColor:'rgba(0,0,0,.5)', width:"1050px", padding:"10px", margin:"10px"}}>  Exceptional dental care for all ages</div>
          <Button active style={{ padding: "10px", margin: "4px", borderColor: "white", backgroundColor:"black"}}>
            <div style={{ fontFamily: "Playfair Display", fontSize: "35px", align: "center", color: "white" }}><a href="/bookappointment" style={{ color:"white" }}>Book an appointment</a></div>
          </Button>
          <div style={{ fontFamily: "Playfair Display", fontSize: "30px", align: "center", color: "white" , backgroundColor:'rgba(0,0,0,.5)' , width:"400px", padding:"10px", margin:"6px"}}> OR Call on (+91) 9833630985  </div>

        </div>
        <br></br>
        <br></br>
        
        

        <Card style={{ padding: 20 , borderWidth:"1px", margin:"5px", position:"float", backgroundColor:'white'}}>
          <CardBody>
            <CardText >
              <img
                src="https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif"
                alt="Card image cap"
                style={{ float: "right", height: "300px" }} />
              <br></br>

              <TfiCheckBox size={50} color="black"/> <h1 style={{ fontFamily: "Playfair Display", display: "inline", fontSize:"30px", color:"black" }}>On time, every time</h1>
              <h3 style={{color:"black"}}>Appointments always start on time. We know how packed your schedule is.</h3>
              <br></br>
              <TfiCheckBox size={50} color="black"/> <h1 style={{ fontFamily: "Playfair Display", display: "inline", fontSize:"30px" ,color:"black"}}>Quality First</h1>
              <h3 style={{color:"black"}}>Rest assured, we encourage the use of only the finest materials available.</h3>
              <br></br>
              <TfiCheckBox size={50} color="black"/> <h1 style={{ fontFamily: "Playfair Display", display: "inline", fontSize:"30px", color:"black" }}>Transparent Pricing</h1>
              <h3 style={{color:"black"}}>We accept a wide variety of payment methods for hassle-free payment</h3>
            </CardText>
          </CardBody>
        </Card>

        

        <br></br>
        <br></br>
        
        

        <div style={{ fontFamily: "Playfair Display", fontSize: "40px", color:"Black" , position:"center", padding:"10px"}}>
                 Our Services
              </div>

        <br></br><br></br><br></br> <br></br>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <img
                // src="https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif"
                src={general}
                alt="Card image cap"
                style={{ height: "300px"}} />
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <p style={{ color: "white", fontSize: "30px", textShadow: "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, padding: "20px", margin: "20px", width: "33%" }}><b>
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </b>
                </p>
              </Image>
            </ImageButton>
          ))}
        </Box>




        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        

        <Card class="container-fluid" style={{ height: "550px" , borderWidth:"2px", margin:"5px", borderColor:"white", }}>
        <div style={{ fontFamily: "Playfair Display", fontSize: "35px", color:"Black" }}>
                 Here's what our patients have to say:
              
              <br></br>
              <div style={{backgroundImage:`url(${testbg2})`, backgroundColor:'rgba(0,0,0,.1)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position:"center", height:"380px"}}>
              <div style={{ fontFamily: "Playfair Display", fontSize: "20px", color:"white", textAlign:"right", padding:"20px", textDecorationColor:"silver" }}>
                 <a href="/testimonials" style={{ color:"white", textDecorationColor:"silver" }}>See all testimonials</a>
              </div>
              
           <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} > 
             <CarouselIndicators items={items1} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> 
            {items1.map((item) => { 

              console.log("we're at display", item) 
       return ( 
        
        
         <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          // key={item.id}
          
          style={{ color: "black", fontFamily: "Playfair Display" }}
          className="text-secondary"

        > 

          <div  style={{ height: "600px", width:"1700px", padding:"20px", align:"center" }}>

            <div class=" col-lg-8 ">
              <div class="card" >
                <p class="post">
                  <span><img class="quote-img" src="https://i.imgur.com/i06xx2I.png" /></span>
                   <span class="post-txt" style={{color:"black"}}>{item.headertext}<br></br>{item.text}</span>
                  <span><img class="nice-img" src="https://i.imgur.com/l5AkSHd.png" /></span>
                  </p>
                  </div>
              <div class="arrow-down"></div>
              <div style={{ fontFamily: "Playfair Display", fontSize: "30px", color:"white" }}>
                 {item.person} 
              </div>
              
              
            </div>
          </div>
       </CarouselItem> 

       
       ); 
    })
     } 
           <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> 



          </Carousel>
          </div> 
          </div>
          

        </Card>

        
        
        
        
        
        
        
        
        
        
        <br></br>
        <br></br>
        <br></br>
        <br>
        </br>
        <div style={{ fontFamily: "Playfair Display", fontSize: "30px", color:"white", padding:"20px", backgroundColor:'rgba(0, 28, 40, 0.38)', paddingLeft:"120px" }}>
                 So what are you waiting for? Smile wide, and 
                 <Button active color="light" style={{ fontFamily: "Playfair Display", fontSize: "35px", padding:"15px", margin:"15px", marginLeft:"80px"}}>
            <a href="/bookappointment" style={{ color:"black", textDecorationColor:"None"}}>Book your appointment today!</a>
            </Button>
              </div>
        
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        





        <ListGroup horizontal style={{ width: "100%", backgroundColor: "white", padding:"10px" }}>
          <ListGroup.Item style={{backgroundColor: "white" }}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.627340847596!2d72.94237301412522!3d19.167783054063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f7c2d76931%3A0xa2d85150fddd96c8!2sDr%20Sandhya&#39;s%20Total%20Dental%20Care!5e0!3m2!1sen!2sin!4v1670239514055!5m2!1sen!2sin" style={{ width: "900px", height: "250px", border: "50px", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", padding: "20px" }}></iframe></ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "Playfair Display", backgroundColor: "white", color:"black", fontSize:"20px", width:"400px" , borderWidth:"5px", borderColor:"white"}}><div style={{fontSize:"30px", borderWidth:"5px"}}>Visit Us</div> <hr color="black"></hr>Shop #9, Saidham Complex, <br></br>P.K road, Mulund West <br></br>Mumbai - 400080<br></br><br></br>Mon - Sat: <br></br>10am to 2pm,  6pm to 9pm</ListGroup.Item>

        </ListGroup>




      <br></br>
      <br></br>




        <Navbar  style={{marginRight:"0px", paddingRight:"0px", paddingLeft:"250px", marginBottom:"0px", backgroundColor:'rgba(0, 28, 40, 0.38)'}}>
          {/* <NavbarBrand href="/" style={{color:"white", fontFamily:"Playfair Display", fontSize:"30px"}} >Social</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          {/* <Collapse isOpen={this.state.isOpen} > */}
          <Nav style={{marginRight:"0px", paddingRight:"0px"}}>
            <NavItem></NavItem>
            

            <ListGroup >
              <ListGroup.Item style={{ fontFamily: "Playfair Display", color: "white", backgroundColor:'rgba(0, 28, 40, 0.38)' }}>
                <NavItem style={{ padding: "20px", paddingRight: "60px", marginRight: "5px", fontFamily: "Playfair Display", fontSize: "30px", backgroundColor:'rgba(0, 28, 40, 0.38)' }}>Social</NavItem><br></br><br></br><BsInstagram size="45px" style={{ padding: "5px" }} /> <AiOutlineLinkedin size="50px" style={{ padding: "3px" }} /></ListGroup.Item>
            </ListGroup>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <ListGroup>
              <ListGroup.Item style={{ fontFamily: "Playfair Display", color: "white", backgroundColor:'rgba(0, 28, 40, 0.38)' }}> <NavItem style={{ padding: "20px", paddingRight: "80px", rightMargin: "50px", fontFamily: "Playfair Display", fontSize: "30px", backgroundColor:'rgba(0, 28, 40, 0.38)'}}>Services</NavItem><br></br><br></br>
                <NavLink href="/components" style={{ color: "white", fontSize: "15px" }}>General</NavLink>
                <NavLink href="/components" style={{ color: "white", fontSize: "15px" }}>Cosmetic</NavLink>
                <NavLink href="/components" style={{ color: "white", fontSize: "15px" }}>Surgical</NavLink><br></br><br></br></ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroup.Item style={{ fontFamily: "Playfair Display", color: "white", backgroundColor:'rgba(0, 28, 40, 0.38)' }}> <NavItem style={{ padding: "20px", paddingRight: "80px", rightMargin: "70px", fontFamily: "Playfair Display", fontSize: "30px", backgroundColor:'rgba(0, 28, 40, 0.38)'}}>Our Office</NavItem><br></br><br></br>
                <NavLink href="/components" style={{ color: "white", fontSize: "15px" }}>Home</NavLink>
                <NavLink href="/components" style={{ color: "white", fontSize: "15px" }}>About</NavLink>
                <NavLink href="/components" style={{ color: "white", fontSize: "15px" }}>Doctor Login</NavLink><br></br><br></br></ListGroup.Item>
            </ListGroup>
            <NavItem></NavItem>
            <ListGroup style={{marginRight:"0px", paddingRight:"0px"}}>
              <ListGroup.Item style={{ fontFamily: "Playfair Display", color: "white", backgroundColor:'rgba(0, 28, 40, 0.38)' }}> <NavItem style={{ padding: "20px", paddingRight: "80px", margin:"0px", fontFamily: "Playfair Display", fontSize: "30px", backgroundColor:'rgba(0, 28, 40, 0.38)'}}>Contact Us</NavItem><div style={{ fontSize: "15px"}}>Call (+91) 9833630985<br></br><br></br>Shop #9, Saidham Complex, <br></br>P.K road, Mulund West <br></br>Mumbai - 400080<br></br><br></br>Mon - Sat: <br></br>10am to 2pm,<br></br>6pm to 9pm</div>
              </ListGroup.Item>
            </ListGroup>
            </Nav>


        </Navbar>

        <div className="text"  style={{ paddingLeft: "750px", color: "white", fontFamily: "Playfair Display", fontSize: "15px", fontStyle: "italic", backgroundColor:'rgba(0, 28, 40, 0.38)'}}>@ Dr Sandhya's Total Dental Care  |  Copyright: 2022  | Designed by: Prakriti Shetty</div>


        
z

      </div>
    );
  }

}

export default App;