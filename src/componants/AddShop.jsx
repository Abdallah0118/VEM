import React from "react";
import "./CSS/Profile.css";
import { Container } from "react-bootstrap";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from "react-router-dom";
const AddShop  = () => {
// ================================================================================================
// const [userInfo, setUserInfo] = useState(null);
// const [shopInfo, setShopInfo] = useState(null);

// useEffect(() => {
//   axios.get('http://localhost:8000/profile/1')
//     .then(response => setUserInfo(response.data))
    
//     .catch(error => console.log(error));
// }, []);

// useEffect(() => {
//   axios.put('http://127.0.0.1:8000/shop/rated')
//     .then(response => setShopInfo(response.data))

//     .catch(error => console.log(`this is error ${error}`));
// }, []);  
  return (
   <Container>
    <div className="row">
  <div className="col-6 col-md-4">
  <div className="container mt-2 w-100">
    <div className="row d-flex justify-content-center">
        <div className="col h-50 mb-3">
            <div className="card p-1 showinfo ">
                <div className="text-center">
                    <img src={require("../assets/user.jpg")} width="150" alt="UserPhoto" className="rounded-circle"/>
                </div>
                    <div className="text-center p-1">
                    <h5 className="mt-2 mt-1"> {1} {2}</h5>
                    <span className=".text-primary p-1 px-4 rounded ">Seller</span>
                    <img src={require("../assets/quality.png")} width="30" alt="quality" />
                    {/* <span>UI/UX Designer</span> */}                    
                    {/* <div className="p-2 "> */}
                        {/* <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                    </div  >
                    <form  method="GET">
                      <div className="txt_field1">
                        <input type="text"    />
                        <span></span>
                        <label>Name Shop</label>
                      </div>
                      <div className="txt_field1">
                        <input type="text"   />
                        <span></span>
                        <label>descraption</label>
                      </div>
                      <div className="txt_field1">
                        <input type="text"   />
                        <span></span>
                        <label>owner of shop</label>
                      </div>
                      <div className="txt_field1">
                        <input type="text"    />
                        <span></span>
                        <label>Other Owner</label>
                      </div>
                      <div className="txt_field1">
                        <input type="password"   />
                        <span></span>
                        <label>Password</label>
                      </div>
                    </form>
                    {/* <Link to="/profile/edit">
                    <img  src={ require("../assets/edit-button.png")} width={"70px"} alt="edit profile" className="btn btn-light  edit1" />  
                    </Link> */}

            </div>
        </div>
    </div>
</div>
  </div>
  <div class="col-12 col-md-8 mt-2">
  <div class="card ">
  <div class="card-header">My Shops</div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
      <form>
                      {/* <div className="d-flex justify-content-between ">
                      <div className="txt_fieldedit  " >
                        <input type="text" />
                        <span></span>
                        <label>first Name</label>
                      </div>
                      <div className="txt_fieldedit ">
                        <input type="text"  />
                        <span></span>
                        <label>Last Name</label>
                      </div>
                      </div> */}
                      <div className="txt_field">
                        <input type="email" />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  />
                        <span></span>
                        <label>Phone Number</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  />
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  />
                        <span></span>
                        <label>Location</label>
                      </div>
                      <div className="txt_field">
                        <input type="password"  />
                        <span></span>
                        <label>Password</label>
                      </div>
                    {/* <div className="container">
                    <div className="row">
                    <div className="col"><input className="btn-success" type="submit" value="Save"  /></div>
                    <div className="col"><input className=" bts bg-dark" type="reset" value="reset" /></div>
                    </div>
                    </div> */}
                    </form>

      </p>
      <p class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p>
    </blockquote>
    </div>

       </div>

    {/* ---------------------------------------------------------------------------------------- */}
    
  <div class="card mt-3 ">
  <div class="card-header">My Shops</div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
      <form>
                      {/* <div className="d-flex justify-content-between ">
                      <div className="txt_fieldedit  " >
                        <input type="text" />
                        <span></span>
                        <label>first Name</label>
                      </div>
                      <div className="txt_fieldedit ">
                        <input type="text"  />
                        <span></span>
                        <label>Last Name</label>
                      </div>
                      </div> */}
                      <div className="txt_field">
                        <input type="email"  />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="txt_field" >
                        <input type="text"  />
                        <span></span>
                        <label>Phone Number</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  />
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  />
                        <span></span>
                        <label>Location</label>
                      </div>
                      <div className="txt_field">
                        <input type="password"  />
                        <span></span>
                        <label>Password</label>
                      </div>
                    </form>

      </p>
      <p class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p>
    </blockquote>
    </div>

    {/* ---------------------------------------------------------------------------------------- */}
       </div>
       
  </div>
  </div>
   </Container>
  );
};

export default AddShop;

