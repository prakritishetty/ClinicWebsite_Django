import React, {Component} from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import {Button, Toast, ToastHeader, ToastBody, Row, Col, Card, CardBody, CardGroup, CardImg, CardTitle, CardHeader, CardSubtitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from "reactstrap";
import {TfiCheckBox} from "react-icons/tfi"
import testimonial from "../testimonials.png"
// import general from "./cleaningteeth.jpg"
// import cosmetic from "./Porcelain-Veneers-Smiles-of-Chandler-AZ.webp"
// import surgical from "./Dental-implant-illustration.jpg"
import { MDBRipple } from 'mdb-react-ui-kit';
import ListGroup from 'react-bootstrap/ListGroup';
import {BsInstagram} from "react-icons/bs"
import {AiOutlineLinkedin} from "react-icons/ai"
import ReactCompareImage from "react-compare-image";
import clinic1 from "../images/clinic1.jpg"
import testimonialsbg from "../images/testimonialsbg.jpeg"
import testbg2 from "../images/testbg2.jpeg"
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
// import MultiStepForm from "./components/MultiStepForm";
import {getDocs } from "firebase/firestore";

const HoverData = "Click or pinch to Zoom Image";

const items = [
    {
      id:1,
      src: "https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif" ,
      altText: 'Slide 1',
      caption: 'Prakriti Shetty',
      
    },
    {
      id:2,
      src: 'https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif',
      altText: 'Slide 2',
      caption: 'Pratiksha Shetty'
    },
    {
      id:3,
      src: 'https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif',
      altText: 'Slide 3',
      caption: 'Sandhya Shetty'
    }
  ];

const items1 = [];

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
            opacity:1
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
    }

    onMouseEnter = () => { this.setState({    isOpen: true}); };
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
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
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
    
    render()
    {
        const { activeIndex } = this.state;
        
        const before =
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg?h=100px&w=20px";
        const after =
        "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";
  
        

        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.id}
              style={{color:"blanchedalmond", fontFamily:"Marck Script"}}
              className="text-secondary"

            >
            
            <img src={testimonial} alt={item.altText} style={{width:"2720px", height:"350px"}}/>
            
              
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} className="text-secondary" style={{padding:"10px", fontFamily:"Marck Script"}} />
            </CarouselItem>
          );
        });

        return(

            
          <div style={{paddingLeft:"0px" , marginLeft:"0px", backgroundImage:`url(${clinic1})`, backgroundPosition:"center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
            
            
            <div style={{ fontFamily: "Playfair Display", fontSize: "60px", align: "center", color: "white", backgroundColor:'rgba(0,0,0,.5)', width:"1050px", padding:"10px", margin:"10px"}}>  This is where we tell you all about us!</div>
            <Button active style={{ padding: "10px", margin: "4px", borderColor: "white", backgroundColor:"black"}}>
              <div style={{ fontFamily: "Playfair Display", fontSize: "35px", align: "center", color: "white" }}><a href="/bookappointment" style={{ color:"white" }}>Book an appointment</a></div>
            </Button>
            <div style={{ fontFamily: "Playfair Display", fontSize: "30px", align: "center", color: "white" , backgroundColor:'rgba(0,0,0,.5)' , width:"400px", padding:"10px", margin:"6px"}}> OR Call on (+91) 9833630985  </div>
  
          </div>
          <br></br>
          <br></br>

          <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
        
        
                        


                            <br></br>
                            <Card style={{ fontFamily: "Playfair Display", fontSize: "30px", color:"Black" , position:"center", padding:"20px", margin:"10px", borderWidth:"2px", borderColor:"black"}}>
                            Greetings and welcome to Dr Sandhya's Total Dental Care! <br></br>We value your trust in us and are committed to providing you with excellent dental care
                            </Card>
                            
                              <br></br><br></br>
                              <br></br>
                              
                              <Navbar style={{backgroundColor:'rgba(0, 28, 40, 0.38)', padding:"20px", marginLeft:"0px", paddingLeft:"0px"}}>

          <Nav className="ms-auto">
          
            <NavItem style={{padding:"30px"}}>
            <Card style={{fontSize:"20px", margin:"15px", width:"500px", padding:"35px"}}>
                                  <CardHeader style={{fontSize:"25px", width:"400px", color:"black", padding:"10px", align:"center"}}>
                                    <b>Dr(Mrs.) Sandhya Shetty, B.D.S</b>
                                  </CardHeader>
            
                                  <CardBody style={{width:"400px", fontSize:"18px", color:"black"}}>
                                  <br></br>
                                    Dr Sandhya Shetty is a Bachelor in Dental Surgery (B.D.S) from the <b>Government Dental College, Aurangabad</b>.<br></br><br></br>
                                    She was the <b>University Topper</b> and <b>Gold Medalist</b> and with almost 15 years of experience, she knows her way around teeth like the back of her hand! 
                                  
                                  </CardBody>
                                  <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    
                                    
                          
                                  <img src={clinic1} style={{height:"200px", width:"250px"}}></img>
                                  
                                  
                                </Card>
            </NavItem>
            {/* <NavItem style={{width:"80px"}}></NavItem> */}
            <NavItem style={{padding:"30px"}}>
            <Card style={{fontSize:"20px", margin:"15px", width:"500px", padding:"35px"}}>
                                  <CardHeader style={{fontSize:"25px", width:"420px", color:"black", padding:"10px", align:"center"}}>
                                    <b>Dr Pratiksha Shetty, B.D.S, M.D.S</b>
                                  </CardHeader>
            
                                  <CardBody style={{width:"400px", fontSize:"18px", color:"black"}}>
                                  <br></br>
                                    Dr Pratiksha Shetty is pursuing Masters of Dental Surgery (M.D.S) in Prosthodontics from the <b>Government Dental College, Mumbai</b>.
                                    <br></br>
                                    <br></br>
                                    She secured an <b>All India Rank 68</b> in NEET-MDS Qualifying Exam.
                                    <br></br>
                                    <br></br>
                                    She has completed her Bachelors in Dental Surgery (B.D.S) from <b>Nair Hospital and Dental College, Mumbai</b>
                                    <br></br>
                                    <br></br>
                                    Dr Pratiksha Shetty is the perfect example of adding the enthusiasm of young and fresh state-of-the-art dentistry techniques to the years of wisdom Dr Sandhya has amassed!




                                  
                                  </CardBody>
                          
                                  <img src={clinic1} style={{height:"200px", width:"250px"}}></img>
                                  
                                  
                                </Card>
            </NavItem>
          
            </Nav>
            </Navbar>


{/* 
                            <Navbar  >
                              
                               
                                
                                
                                
                                </Navbar> */}
                                
                            


                            <br></br><br></br><br></br><br></br>
                      
                        
                            <div style={{ fontFamily: "Playfair Display", fontSize: "35px", color:"Black", padding:"20px" , backgroundColor:'rgba(255, 255, 255, 0.7)', height:"450px"}}>
                 Case Histories - Before/After:
              


                            <CardGroup style={{padding:"20px", height:"100px"}}>
                              <Card style={{padding:"15px", height:"300px"}}>
                                <ReactCompareImage leftImage={before} rightImage={after}/>
                                <CardBody>
                                  
                                  <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h3"
                                  >
                                    Root Canal Treatment
                                  </CardSubtitle>
                                  
                                </CardBody>
                              </Card>
                              <Card style={{padding:"20px", height:"300px"}}>
                              <ReactCompareImage leftImage={before} rightImage={after} />
                                <CardBody>
                                  
                                  <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h3"
                                  >
                                    Implantology
                                  </CardSubtitle>
                                  
                                  
                                </CardBody>
                              </Card>
                              <Card style={{padding:"20px", height:"300px"}}>
                              <ReactCompareImage leftImage={before} rightImage={after}/>
                                <CardBody>
                                  
                                  <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h3"
                                  >
                                    Digital Smile Design
                                  </CardSubtitle>
                                  
                                  
                                </CardBody>
                              </Card>
                            </CardGroup>
                            </div>





                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>




                            <Card class="container-fluid" style={{ height: "550px" , borderWidth:"2px", margin:"5px", borderColor:"white", }}>
        <div style={{ fontFamily: "Playfair Display", fontSize: "35px", color:"Black" }}>
                 Here's what our patients have to say:
              </div>
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
          className="text-secondary"> 

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