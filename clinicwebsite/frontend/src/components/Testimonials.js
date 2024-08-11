import React, { Component } from "react";
import { Button, Card } from "reactstrap";
import clinic1 from "../images/clinic1.jpg";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { getDocs } from "firebase/firestore";
import NavbarUtil from "../utils/NavbarUtil.js";
import PageTestimonialsUtil from "../utils/PageTestimonialsUtil.js";
import FooterUtil from "../utils/FooterUtil.js";
import BeforeAfterUtil from "../utils/BeforeAfterUtils.js";

const items1 = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [],
    };
  }

  componentDidMount() {
    this.fetchPost();
  }
  fetchPost = async () => {
    try {
      await getDocs(collection(db, "testimonials")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // this.setState({todos:newData});

        console.log("hi from inside fetch before", newData);

        newData.map((testimonial, i) => {
          console.log(i + 3);
          items1.push({
            id: i + 3,
            headertext: testimonial.headertext,
            text: testimonial.text,
            person: testimonial.person,
          });
        });

        console.log("hi from inside fetch", items1);
        this.setState({ testimonials: items1 });
      });
    } catch (e) {
      console.error("Error retrieving document: ", e);
    }
  };

  render() {
    return (
      <div
        style={{
          paddingLeft: "0px",
          marginLeft: "0px",
          backgroundImage: `url(${clinic1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavbarUtil />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div
          className="p-5 my-6 rounded"
          style={{
            padding: "0px",
            margin: "0px",
            backgroundImage: `url(${clinic1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "90vh",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: "6vw",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100vw",
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            All Testimonials!
          </div>
          <Button
            active
            style={{
              padding: "10px",
              margin: "4px",
              borderColor: "white",
              backgroundColor: "black",
            }}
          >
            <div
              style={{
                fontFamily: "Playfair Display",
                fontSize: "35px",
                align: "center",
                color: "white",
              }}
            >
              <a
                href="https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic%0D%0AMy%20name%20is%20:%0D%0AMy%20chief%20complaint%20is:"
                style={{ color: "white" }}
              >
                Book an appointment
              </a>
            </div>
          </Button>
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: "30px",
              align: "center",
              color: "white",
              backgroundColor: "rgba(0,0,0,.5)",
              width: "400px",
              padding: "10px",
              margin: "6px",
            }}
          >
            {" "}
            OR Call on (+91) 9833630985{" "}
          </div>
        </div>

        <br></br>
        <br></br>

        <Card
          class="container-fluid"
          style={{
            height: "800px",
            backgroundColor: "rgba(0, 28, 40, 0.38)",
            borderColor: "white",
            borderWidth: "2px",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: "35px",
              color: "white",
            }}
          >
            Here's what our patients have to say (All Testimonials):
          </div>
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: "20px",
              color: "white",
              textAlign: "right",
              padding: "20px",
              textDecorationColor: "white",
            }}
          >
            {items1.length} results
          </div>
          {console.log("see all items", items1)}

          <div
            class="row justify-content-center"
            style={{ maxHeight: "650px", overflowY: "scroll", padding: "20px" }}
          >
            {items1.map((item) => {
              console.log("we're at display", item);
              return (
                //   <div class="row justify-content-center" style={{ height: "600px", padding:"20px" }}>

                <div class=" col-lg-8 ">
                  <div
                    class="card"
                    style={{
                      backgroundColor: "rgba(0, 28, 40, 0.38)",
                      borderColor: "white",
                      borderWidth: "1px",
                    }}
                  >
                    <p class="post">
                      <span>
                        <img
                          class="quote-img"
                          src="https://i.imgur.com/i06xx2I.png"
                        />
                      </span>
                      <span class="post-txt">
                        {item.headertext}
                        <br></br>
                        {item.text}
                      </span>
                      <span>
                        <img
                          class="nice-img"
                          src="https://i.imgur.com/l5AkSHd.png"
                        />
                      </span>
                    </p>
                  </div>
                  <div class="arrow-down"></div>
                  <div
                    style={{
                      fontFamily: "Playfair Display",
                      fontSize: "25px",
                      color: "white",
                    }}
                  >
                    {item.person}
                  </div>
                </div>
                //   </div>
              );
            })}
          </div>
        </Card>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <FooterUtil />
      </div>
    );
  }
}

export default App;
