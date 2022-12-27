import React, {Component} from "react";
import {Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import {Button, Toast, ToastHeader, ToastBody, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import Accordion from "react-bootstrap/Accordion"
import testimonial from "../testimonials.png"
import ListGroup from 'react-bootstrap/ListGroup';
import {BsInstagram} from "react-icons/bs"
import {AiOutlineLinkedin} from "react-icons/ai"



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
        
       
        

        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.id}
              style={{color:"black", fontFamily:"Marck Script"}}
              className="text-secondary"

            >
            
            <img src={testimonial} alt={item.altText} style={{width:"2720px", height:"350px"}}/>
            
              
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} className="text-secondary" style={{padding:"10px", fontFamily:"Marck Script"}} />
            </CarouselItem>
          );
        });

        return(

            
        <div>
                    <Navbar color="secondary" style={{color:"white"}}>
                        <NavbarBrand href="/" style={{color:"white", fontFamily:"Arizonia", fontSize:"35px"}}>Root Canal Treatment</NavbarBrand>
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
                            <div className="p-5 my-6 rounded" style={{ backgroundImage: `url("https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif")` , backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',width: '100vw',height: '90vh'}}>
                                <Toast style={{height:"300px", width:"50%", display:"block"}}>
                                    <ToastHeader align="center" style={{height:"100px", fontFamily:"Arizonia", fontSize:"30px", align:"center", padding:"20px"}}>
                                        We are perfect for your entire family
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
                        


                            <br></br><br></br>
                            {/* <div> */}
      {/* <Accordion open={this.open} toggle={this.toggle}>
        <Accordion.Item>
          <Accordion.Header targetId="1">Accordion Item 1</Accordion.Header>
          <Accordion.Body accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header targetId="2">Accordion Item 2</Accordion.Header>
          <Accordion.Body accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header targetId="3">Accordion Item 3</Accordion.Header>
          <Accordion.Body accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div> */}

<div>
    <p style={{padding:"20px", fontSize:"20px"}}>A root canal is a dental procedure that is used to treat a tooth that is infected or damaged in the pulp, which is the tissue inside the tooth that contains the nerves and blood vessels. The procedure involves removing the infected or damaged pulp from inside the tooth and then filling and sealing the root canal to prevent further infection.
<br></br><br></br>
Root canals are often needed when a tooth becomes infected or damaged as a result of decay, trauma, or a deep filling. If left untreated, an infected or damaged tooth can cause pain, swelling, and even abscesses. A root canal can help relieve these symptoms and save the tooth from extraction.
<br></br><br></br>
To perform a root canal, the dentist or endodontist (a dental specialist who performs root canals) will numb the tooth and surrounding area with an anesthetic. The dentist will then make an opening in the top of the tooth and remove the infected or damaged pulp using special instruments. Once the pulp has been removed, the dentist will clean and shape the root canal and fill it with a special material to seal it. The tooth is then restored with a filling or crown to protect it and restore its function.
<div class="wrapper">
<div class="svg-container">
  <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" class="svg-content">
    
    <defs>
      <marker id="arrow" markerWidth="4" markerHeight="10" viewBox="-2 -4 4 4" refX="0" refY="0" markerUnits="strokeWidth" orient="auto">
        <polyline points="2,-2 0,0 2,2" stroke="#443c3d" strokeWidth="0.75px" fill="none"/>
      </marker>
  </defs>
 
    
    <g class="box-group">
      <g transform="translate(-5)">
	      <circle fill="#000" cx="55" cy="50" r="45" opacity="1" />
        <text x="28" y="58" font-family="Open Sans Condensed" fontSize="26" stroke="none" fill="#f5f3e7" fontWeight="100" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Start</text>
        <line x1="102" x2="135" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />
      </g>
        
      <line x1="100" x2="136" y1="50" y2="50" stroke-width="2" stroke="#443c3d" stroke-dasharray="2,1" />

      <g transform="translate(136)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" font-family="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #1</tspan>
      </text>
      </g>

      <line x1="230" x2="268" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />
      
      <g transform="translate(268)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" font-family="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #2</tspan>
      </text>
      </g>

      <line x1="362" x2="400" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />
      
      <g transform="translate(400)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" fontFamily="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #3</tspan>
      </text>
      </g>
    </g>
    
    <line x1="450" x2="450" y1="77" y2="124" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />
    
    <g class="box-group" transform="translate(0,100)">
      <g transform="translate(5)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" fontFamily="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #7</tspan>
      </text>
      </g>
        
      <line x1="100" x2="136" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />

      <g transform="translate(136)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" font-family="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #6</tspan>
      </text>
      </g>

      <line x1="230" x2="268" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />
      
      <g transform="translate(268)">
        <polygon points="60,20 100,40 100,80 60,100 20,80 20,40" fill="#72508d" transform="translate(-12,-10)"/>
      <rect fill="#72508d" stroke="#72508d" strokeWidth="0" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" font-family="Open Sans Condensed" fontSize="14" stroke="none" fill="#fff" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #5</tspan>
      </text>
      </g>

      <line x1="362" x2="400" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" marker-start="url(#arrow)"/>
      
      <g transform="translate(400)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" font-family="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #4</tspan>
      </text>
      </g>
    </g>
    
    <line x1="50" x2="50" y1="177" y2="224" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />
    
    <g class="box-group" transform="translate(0,200)">
      <g transform="translate(5)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" font-family="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #8</tspan>
      </text>
      </g>
        
      <line x1="100" x2="136" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />

      <g transform="translate(136)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" fontFamily="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #9</tspan>
      </text>
      </g>

      <line x1="230" x2="268" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />
      
      <g transform="translate(268)">
      <rect fill="#66cc00" x="2" y="25" rx="3" ry="3" width="90" height="50" />
      <text x="16" y="47" fontFamily="Open Sans Condensed" fontSize="14" stroke="none" fill="#f5f3e7" fontWeight="900" style={{textTransform:"uppercase", letterSpacing: "1px"}}>Workflow
        <tspan x="26" dy="17">Step #10</tspan>
      </text>
      </g>

      <line x1="362" x2="400" y1="50" y2="50" strokeWidth="2" stroke="#443c3d" strokeDasharray="2,1" />
      
      <g transform="translate(392)">
	      <circle fill="#000" cx="55" cy="50" r="45" opacity="1" />
        <text x="37" y="58" fontFamily="Open Sans Condensed" fontSize="26" stroke="none" fill="#f5f3e7" fontWeight="100" style={{textTransform:"uppercase", letterSpacing: "1px"}}>End</text>
      </g>
    </g>
  
	</svg>
</div>
</div>
<br></br><br></br>
Overall, root canals are a safe and effective way to treat infected or damaged teeth and can help relieve pain and prevent the need for extraction. If you are experiencing tooth pain or other symptoms that may indicate a need for a root canal, it is important to consult with a dental professional as soon as possible.</p>

    </div>


                {/* <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div> */}



                        
                        <div style={{position:"relative",overflow:"hidden", display:"inline"}}>
                        
                        <img
                          onMouseEnter={(e)=>this.onHover(e)}
                          onMouseLeave={(e)=>this.onHoverOver(e)}
                          alt=""
                          src=""
                          className="img-responsive colored-pencil-effect"
                          
                          style={{width:"33%", opacity:"0.5", boxShadow: "inset -10px -10px 10px 20px white"}}
                          
                        ></img>
                        { this.state.hover && <p style={{color:"white", fontSize:"40px", textShadow: "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000", position:"absolute", top:0,bottom:0, left:0, right:0, padding:"20px", margin:"20px", width:"33%"}}><b>GENERAL</b></p>}
                        
                        </div>
                        <div style={{position:"relative",overflow:"hidden", display:"inline"}}>
                        <img
                          onMouseEnter={(e)=>this.onHover1(e)}
                          onMouseLeave={(e)=>this.onHoverOver1(e)}
                          alt=""
                          src=""
                          className="img-responsive colored-pencil-effect"
                          
                          style={{width:"33%",opacity:"0.5"}}
                        ></img>
                        { this.state.hover1 && <p style={{color:"white", fontSize:"40px", textShadow: "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000", position:"absolute", top:0,bottom:0, left:0, right:0, padding:"20px", margin:"20px", width:"33%"}}><b>COSMETIC</b></p>}
                        </div>
                        <div style={{position:"relative",overflow:"hidden", display:"inline"}}>
                        <img
                          onMouseEnter={(e)=>this.onHover2(e)}
                          onMouseLeave={(e)=>this.onHoverOver2(e)}
                          alt=""
                          src=""
                          className="img-responsive colored-pencil-effect"
                          
                          style={{width:"33%",opacity:"0.5"}}
                        ></img>
                        { this.state.hover2 && <p style={{color:"white", fontSize:"40px", textShadow: "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000", position:"absolute", top:0,bottom:0, left:0, right:0, padding:"20px", margin:"20px"}}><b>SURGICAL</b></p>}
                        </div>


                        <br></br><br></br><br></br><br></br>

                        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}  >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>


                       

                        
                        
                       
                       <ListGroup horizontal style={{width:"100%"}}>
                          <ListGroup.Item><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.627340847596!2d72.94237301412522!3d19.167783054063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f7c2d76931%3A0xa2d85150fddd96c8!2sDr%20Sandhya&#39;s%20Total%20Dental%20Care!5e0!3m2!1sen!2sin!4v1670239514055!5m2!1sen!2sin" style={{width:"1000px", height:"250px" ,border:"0" ,allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade", padding:"20px"}}></iframe></ListGroup.Item>
                          <ListGroup.Item style={{fontFamily:"Georgia"}}>Visit Us <br></br><br></br>Shop #9, Saidham Complex, <br></br>P.K road, Mulund West <br></br>Mumbai - 400080<br></br><br></br>Mon - Sat: <br></br>10am to 2pm,<br></br>6pm to 9pm</ListGroup.Item>
                  
                        </ListGroup>


                        
                        <Navbar color="secondary" style={{color:"secondary"}}>
                        {/* <NavbarBrand href="/" style={{color:"white", fontFamily:"Arizonia", fontSize:"30px"}} >Social</NavbarBrand> */}
                        <NavbarToggler onClick={this.toggle} />
                            {/* <Collapse isOpen={this.state.isOpen} > */}
                                <Nav >
                                  <NavItem></NavItem>
                                    
                                    <ListGroup style={{backgroundColor:"grey"}}>
                                    <ListGroup.Item style={{fontFamily:"Georgia", color:"white", backgroundColor:"grey"}}> 
                                    <NavItem style={{padding:"20px", paddingRight:"80px", rightMargin:"70px",fontFamily:"Arizonia", fontSize:"30px", backgroundColor:"grey"}}>Social</NavItem><br></br><br></br><BsInstagram size="45px" style={{padding:"5px"}}/> <AiOutlineLinkedin size="50px" style={{padding:"3px"}}/></ListGroup.Item>
                                    </ListGroup>
                                    <NavItem></NavItem>
                                    <ListGroup>
                                    <ListGroup.Item style={{fontFamily:"Georgia", color:"white",backgroundColor:"grey"}}> <NavItem style={{padding:"20px", paddingRight:"80px", rightMargin:"70px",fontFamily:"Arizonia", fontSize:"30px",backgroundColor:"grey"}}>Services</NavItem><br></br><br></br>
                                    <NavLink href="/components" style={{color:"white"}}>General</NavLink>
                                    <NavLink href="/components" style={{color:"white"}}>Cosmetic</NavLink>
                                    <NavLink href="/components" style={{color:"white"}}>Surgical</NavLink><br></br><br></br></ListGroup.Item>
                                    </ListGroup>
                                    <ListGroup>
                                    <ListGroup.Item style={{fontFamily:"Georgia", color:"white",backgroundColor:"grey"}}> <NavItem style={{padding:"20px", paddingRight:"80px", rightMargin:"70px",fontFamily:"Arizonia", fontSize:"30px",backgroundColor:"grey"}}>Our Office</NavItem><br></br><br></br>
                                    <NavLink href="/components" style={{color:"white"}}>Home</NavLink>
                                    <NavLink href="/components" style={{color:"white"}}>About</NavLink>
                                    <NavLink href="/components" style={{color:"white"}}>Doctor Login</NavLink><br></br><br></br></ListGroup.Item>
                                    </ListGroup>
                                    <NavItem></NavItem>
                                    <ListGroup>
                                    <ListGroup.Item style={{fontFamily:"Georgia", color:"white",backgroundColor:"grey"}}> <NavItem style={{padding:"20px", paddingRight:"80px", rightMargin:"70px",fontFamily:"Arizonia", fontSize:"30px",backgroundColor:"grey"}}>Contact Us</NavItem>Call (+91) 9833630985<br></br><br></br>Shop #9, Saidham Complex, <br></br>P.K road, Mulund West <br></br>Mumbai - 400080<br></br><br></br>Mon - Sat: <br></br>10am to 2pm,<br></br>6pm to 9pm</ListGroup.Item>
                                    </ListGroup>


                                    
                                    
                                </Nav>
                                
                          
                        </Navbar>
                        <div className="text" style={{paddingLeft:"700px", backgroundColor:"grey", color:"white", fontFamily:"Arizonia", fontSize:"15px"}}>@Dr Sandhya's Total Dental Care  |  Copyright: 2022  | Designed by: Prakriti Shetty</div>




        </div>
        );
    }

}

export default App;