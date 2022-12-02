import React, {Component} from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import {Button, Toast, ToastHeader, ToastBody, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from "reactstrap";
import {TfiCheckBox} from "react-icons/tfi"
import testimonial from './testimonial.jpg'

const items = [
    {
      
      src: "https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif" ,
      altText: 'Slide 1',
      caption: 'Slide 1',
       
    },
    {
      src: 'https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

class App extends Component{

    constructor(props)
    {
        super(props);
        this.state = ({
            isOpen: false, isOpenG: false, isOpenC: false, isOpenS: false, 
            activeIndex: 0,
        });
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onMouseEnter = () => { this.setState({    isOpen: true}); };
    onMouseLeave = () => {this.setState({     isOpen: false});};
    onMouseEnterG = () => {this.setState({    isOpenG: true});};
    onMouseLeaveG = () => {this.setState({    isOpenG: false});};
    onMouseEnterC = () => {this.setState({    isOpenC: true});};
    onMouseLeaveC = () => {this.setState({    isOpenC: false});};
    onMouseEnterS = () => {this.setState({    isOpenS: true});};
    onMouseLeaveS = () => {this.setState({    isOpenS: false});};

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
    
    render()
    {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });

        return(

            
        <div>
                    <Navbar color="secondary" style={{color:"white"}}>
                        <NavbarBrand href="/" style={{color:"white"}} >Dr Sandhya's Total Dental Care</NavbarBrand>
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
                                                    <DropdownItem>Botox</DropdownItem>
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
                                                    <DropdownItem>Botox</DropdownItem>
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
                            <div className="p-5 my-6 rounded" style={{ backgroundImage: `url("https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif")` , backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',width: '100vw',height: '90vh'}}>
                                <Toast style={{height:"300px", width:"50%", display:"block"}}>
                                    <ToastHeader align="center" style={{height:"100px", fontFamily:"Lucida Handwriting", fontSize:"20px", align:"center"}}>
                                        Exceptional dental care for all ages
                                    </ToastHeader>
                                    <ToastBody style={{fontFamily:"Verdana", fontSize:"20px", align:"center"}}>
                                        Call on (+91) 9833630985
                                        Or
                                        <br></br>
                                        <br></br>
                                        <Button align="center" active color="dark" style={{padding:"8px" ,margin:"5px", marginLeft:"55px"}}>
                                            Book an appointment
                                        </Button>
                                    </ToastBody>
                                </Toast>
                            </div>
                        
                        <Card style={{padding:20}}>            
                        <CardBody>
                        <CardText >
                            <img
                            src="https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif"
                            alt="Card image cap"
                            style={{float: "right", height:"300px"}}/> 
                            <br></br>
                            <TfiCheckBox size={50}/> <h2 style={{fontFamily:"Century Gothic", display:"inline"}}>On time, every time</h2>
                            <h5>Appointments always start on time. We know how packed your schedule is.</h5>
                            <br></br>
                            <TfiCheckBox size={50}/> <h2 style={{fontFamily:"Century Gothic", display:"inline"}}>Quality First</h2>
                            <h5>Rest assured, we encourage the use of only the finest materials available.</h5>
                            <br></br>
                            <TfiCheckBox size={50}/> <h2 style={{fontFamily:"Century Gothic", display:"inline"}}>Transparent Pricing</h2>
                            <h5>We accept a wide variety of payment methods for hassle-free payment</h5>                    
                        </CardText>         
                        </CardBody>
                        </Card>
                        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} style={{display:"cover"}}>
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
        







        </div>
        );
    }

}

export default App;