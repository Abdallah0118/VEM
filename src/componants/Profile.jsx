import React from "react";
import "./CSS/SignIn.css";
import { Card,Button, Col ,Row } from "react-bootstrap";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { useSelector } from "react-redux";
const Profile  = () => {
  const { userProfile } = useSelector(state => state.user);
  
  // const [data, setData] = useState({});
  //   useEffect(() => {
  //     axios.get('http://localhost:8000/profile/1')
  //       .then(response => setData(response.data))
  //       .catch(error => console.log(error));
  //   }, []);
// =============================================================================================================

  // const [data, setData] = useState({});

  // const [userInfo, setUserInfo] = useState(null);
  // useEffect(() => {
  //   axios.get('http://localhost:8000/profile/1', {headers: {'Access-Control-Allow-Origin': 'http://localhost:8000'}})
  //     .then(response => setUserInfo(response.data))
  //     .catch(error => console.log(error));
  // }, []);

// ================================================================================================

// axios.get('http://localhost:8000/profile/1')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
  
  return (
  <>
  <div className="container mt-5 w-100">
    
    <div className="row d-flex justify-content-center">
        <div className="col">
            <div className="card p-3 py-4">
            {/* {userInfo && ( */}
              <>
                <div className="text-center">
                    <img src={require("../assets/user.jpg")} width="200" alt="UserPhoto" className="rounded-circle"/>
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
                      
                        <input type="text"  placeholder="f name" value={userProfile.first_name}   />
                        <span></span>
                        <label>first Name</label>
                       
                      </div>
                      <div className="txt_field ">
                        <input type="text" placeholder="l name" value={userProfile.list_name} />
                        <span></span>
                        <label>Last Name</label>
                        
                      </div>
                      </div>
                      <div className="txt_field">
                        <input type="email"  />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="txt_field">
                        <input type="text" />
                        <span></span>
                        <label>Phone Number</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"   Focus/>
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  Focus/>
                        <span></span>
                        <label>Location</label>
                      </div>
                      <div className="txt_field">
                        <input type="password" />
                        <span></span>
                        <label>Password</label>
                      </div>
                    </form>
                    <img  src={require("../assets/edit-button.png")} width={"70px"} alt="edit profile" className="btn btn-light  edit1" />
                    
                </div>
                </>              
            </div>
        </div>
    </div>
</div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
<div className="container mt-5 w-100 p-5">  
     <h1 className="text-center " >My Shop</h1>  
    <div className="row d-flex justify-content-center  ">
        <div className="col P-5 ">
            <div className="card p-3 py-4 text-center">
                    <img  src={require("../assets/store.png")} width={"70px"} alt="edit store" className="btn btn-light  edit1" />


                    <Row xs={2} md={3} className="g-4 mt-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
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
