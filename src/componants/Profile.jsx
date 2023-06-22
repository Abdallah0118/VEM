import React from "react";
import "./CSS/SignIn.css";
import { Card,Button, Col ,Row,Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
const Profile  = () => {
// ================================================================================================
const [userInfo, setUserInfo] = useState(null);

useEffect(() => {
  axios.get('http://localhost:8000/profile/1')
    .then(response => setUserInfo(response.data))
    
    .catch(error => console.log(error));
}, []);
  
  return (
   <Container>
      <Row>
        <Col sm={3} >
        <div className="container mt-5  w-100 overflow-auto ">  
    <div className="row d-flex justify-content-center  ">
        <div className="col P-5  ">
            <div className="card p-3 py-4 text-center ">
                    <img  src={require("../assets/store.png")} width={"70px"} alt="edit store" className="btn btn-light  edit1" />

      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="w-1000 ">
            <Card.Img variant="top"  src={require("../assets/kitchen.jpg")} alt="shopPhoto" width={"20%"} />
            <Card.Body>
            <Card.Title>Title Shop</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="danger">Delete Shop</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}                     
            {/* ===========================================================================   */}
         </div>                
            </div>
              </div>
               </div>


        </Col>
        <Col sm={9}>
        <div className="container mt-5 w-100">
    
    <div className="row d-flex justify-content-center">
        <div className="col">
            <div className="card p-3 py-4">
            {userInfo ? (
              <>
                <div className="text-center">
                    <img src={  `http://localhost:8000/${userInfo.User.profile_picture}`||require("../assets/user.jpg")} width="200" alt="UserPhoto" className="rounded-circle"/>
                </div>
                              <div className="text-center mt-3 p-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                    <h5 className="mt-2 mb-0">USER</h5>
                    {/* <span>UI/UX Designer</span> */}
                    
                    <div className="px-4 mt-1">
                        {/* <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                    
                    </div  >
                    <form  method="GET">
                      <div className="d-flex justify-content-between ">
                      <div className="txt_field  " >
                      
                        <input type="text" value={userInfo.User.first_name || "no name" }  />
                        <span></span>
                        <label>first Name</label>
                       
                      </div>
                      <div className="txt_field ">
                        <input type="text"  placeholder={userInfo.User.last_name || "no name"} />
                        <span></span>
                        <label>Last Name</label>
                        
                      </div>
                      </div>
                      <div className="txt_field">
                        <input type="email"  value={userInfo.User.email || "No email"}  />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="txt_field">
                        <input type="tel"  value={userInfo.User.phone|| "no name"} />
                        <span></span>
                        <label>Phone Number</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"   value={userInfo.User.birth_date|| "no name"} />
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  value={userInfo.User.location|| "no name"} />
                        <span></span>
                        <label>Location</label>
                      </div>
                      <div className="txt_field">
                        <input type="password" value={userInfo.User.password|| "no name"}/>
                        <span></span>
                        <label>Password</label>
                      </div>
                    </form>
                    <img  src={ require("../assets/edit-button.png")} width={"70px"} alt="edit profile" className="btn btn-light  edit1" />
                    
                </div>
                </>   
                ) : (   
                  <div class="text-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
      )}        
            </div>
        </div>
    </div>
</div>
        </Col>
      </Row>
 </Container>
  );
};

export default Profile;
