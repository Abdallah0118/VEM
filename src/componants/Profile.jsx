import React from "react";
import "./CSS/Profile.css";
import { Card,Button, Col ,Row,Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
const Profile  = () => {
// ================================================================================================
const [userInfo, setUserInfo] = useState(null);
const [shopInfo, setShopInfo] = useState(null);

useEffect(() => {
  axios.get('http://localhost:8000/profile/1')
    .then(response => setUserInfo(response.data))
    
    .catch(error => console.log(error));
}, []);

useEffect(() => {
  axios.get('http://127.0.0.1:8000/shop/rated')
    .then(response => setShopInfo(response.data))

    .catch(error => console.log(error));
}, []);  
  return (
   <Container>
    <div className="row">
  <div className="col-6 col-md-4">
  <div className="container mt-2 w-100">
    <div className="row d-flex justify-content-center">
        <div className="col h-50 mt-3 mb-3">
            <div className="card p-3  ">
            {userInfo ? (
              <>
                <div className="text-center">
                    <img src={  `http://localhost:8000/${userInfo.User.profile_picture}`||require("../assets/user.jpg")} width="180" alt="UserPhoto" className="rounded-circle"/>
                </div>
                       <div className="text-center p-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white" style={{display: userInfo.User.is_seller ? "inline" : "none"}}>Pro</span>
                    <img src={require("../assets/quality.png")} width="30" alt="quality" style={{display: userInfo.User.is_active? "inline" : "none"}}/>
                    
                    <h5 className="mt-2 mb-0"> {userInfo.User.first_name} {userInfo.User.last_name}</h5>
                    {/* <span>UI/UX Designer</span> */}
                    
                    <div className="p-2 ">
                        {/* <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                    </div  >
                    <form  method="GET">
                      {/* <div className="d-flex justify-content-between ">
                      <div className="txt_field  " >
                        <input type="text" value={userInfo.User.first_name || "no name" }   autofocus/>
                        <span></span>
                        <label>first Name</label>
                      </div>
                      <div className="txt_field ">
                        <input type="text"  value={userInfo.User.last_name || "no name"}   autofocus/>
                        <span></span>
                        <label>Last Name</label>
                      </div>
                      </div> */}
                      <div className="txt_field1">
                        <input type="email"  value={userInfo.User.email || "No email"}  readOnly autofocus />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="txt_field1">
                        <input type="tel"  value={userInfo.User.phone|| "no name"}  readOnly autofocus/>
                        <span></span>
                        <label>Phone</label>
                      </div>
                      <div className="txt_field1">
                        <input type="text"   value={userInfo.User.birth_date|| "no name"}  readOnly autofocus/>
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div className="txt_field1">
                        <input type="text"  value={userInfo.User.location|| "no name"}  readOnly autofocus/>
                        <span></span>
                        <label>Location</label>
                      </div>
                      <div className="txt_field1">
                        <input type="password" value={userInfo.User.password|| "no name"} readOnly autofocus/>
                        <span></span>
                        <label>Password</label>
                      </div>
                    </form>
                    <img  src={ require("../assets/edit-button.png")} width={"70px"} alt="edit profile" className="btn btn-light  edit1" />
                    
                </div>
                </>   
                ) : (   
                  <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
      )}        
            </div>
        </div>
    </div>
</div>
  </div>
  <div class="col-12 col-md-8 mt-2">
  <div class="card">
  <div class="card-header">My Shops</div>
  {shopInfo? (
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <p class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p>
    </blockquote>
    </div>
                ) : (   
                  <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
      )} 
       </div>
  </div>
</div>
 </Container>
  );
};

export default Profile;

