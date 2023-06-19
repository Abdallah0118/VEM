import React from "react";
import "./CSS/SignIn.css";
import { Card,Button, Col ,Row } from "react-bootstrap";
const Profile  = () => {
  return (
  <>
  <div class="container mt-5 w-100">
    
    <div class="row d-flex justify-content-center">
        <div class="col">
            <div class="card p-3 py-4">
                <div class="text-center">
                    <img src={require("../assets/user.jpg")} width="200" alt="UserPhoto" class="rounded-circle"/>
                </div>
                              <div class="text-center mt-3 p-3">
                    <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                    <h5 class="mt-2 mb-0">NAME OF USER</h5>
                    {/* <span>UI/UX Designer</span> */}
                    
                    <div class="px-4 mt-1">
                        {/* <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                    
                    </div  >
                    <form method="post">
                      <div className="d-flex justify-content-between ">
                      <div class="txt_field  " >
                        <input type="text"  placeholder="f name" value={"ahmed"}   />
                        <span></span>
                        <label>first Name</label>
                      </div>
                      <div class="txt_field ">
                        <input type="text" placeholder="l name"/>
                        <span></span>
                        <label>Last Name</label>
                      </div>
                      </div>
                      <div class="txt_field">
                        <input type="email"  />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div class="txt_field">
                        <input type="text" />
                        <span></span>
                        <label>Phone Number</label>
                      </div>
                      <div class="txt_field">
                        <input type="text"   Focus/>
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div class="txt_field">
                        <input type="text"  Focus/>
                        <span></span>
                        <label>Location</label>
                      </div>
                      <div class="txt_field">
                        <input type="password" />
                        <span></span>
                        <label>Password</label>
                      </div>
                    </form>
                    <img  src={require("../assets/edit-button.png")} width={"70px"} className="btn btn-light  edit" />
                    
                </div>                
            </div>
        </div>
    </div>
</div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
<div class="container mt-5 w-100 p-5">  
     <h1 className="text-center " >My Shop</h1>  
    <div class="row d-flex justify-content-center mt-5 ">
        <div class="col P-5 ">
            <div class="card p-3 py-4 text-center">
                    {/* <img  src={require("../assets/store.png")} width={"70px"} className="btn btn-light  edit" /> */}
                    <input type="submit" value="EDIT" />


                    <Row xs={2} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top"  src={require("../assets/kitchen.jpg")} width={"20%"} />
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
               {/* ------------------------------------------------------------------------- */}
      {/* <Card>
             <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Create Shop</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                <Button variant="success">Add Shop</Button>
              </Card.Body>
            </Card>     */}
    </Row>                   
   

            

            {/* ===========================================================================   */}
      
              
                </div>                
            </div>
        </div>
    </div>



  </>
  );
};

export default Profile;
