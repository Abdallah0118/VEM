import "./CSS/SignIn.css";
import { Card,Button, Col ,Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Profile  = () => {
  const [user, setUser] = useState(null); // initial user state
  const [lname, setLname] = useState('');
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    // fetch user data from backend when component mounts
    axios.get('http://localhost:8000/profile/1')
      .then(response => {
        setUser(response.data);
        // setLname(response.data.first_name);
        // setFname(response.data.last_name);
        // setEmail(response.data.email);
        // setPhone(response.data.phone);
        // setBirthdate(response.data.birth_date);
        // setLocation(response.data.location);
        // setPassword(response.data.password);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedUser = {lname,fname,email,phone,birthdate,location,password };

    try {
      const response = await axios.put('http://localhost:8000/profile/1', updatedUser);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  // const [formData, setFormData] = useState({
  //   id: '',
  //   name: '',
  //   description: ''
  // });
  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const apiUrl = 'http://localhost:8000/profile/';
  //   axios.put(apiUrl, formData)
  //     .then(response => {
  //       console.log('Data updated successfully:', response.data);
  //       setFormData(response.data);
  //       fs.writeFile('data.json', JSON.stringify(response.data), (err) => {
  //         if (err) {
  //           console.error('Error writing data to file:', err);
  //         } else {
  //           console.log('Data written to file successfully');
  //         }
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error updating data:', error);
  //     });
  // };


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
                    {user ? (
                    // <>
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex justify-content-between ">
                      <div class="txt_field  " >
                        <input type="text"   value={user.User.first_name} onChange={(e) => setFname(e.target.value)}   />
                        <span></span>
                        <label>first Name</label>
                      </div>
                      <div class="txt_field ">
                        <input type="text" placeholder="l name"  value={lname} onChange={(e) => setLname(e.target.value)}/>
                        <span></span>
                        <label>Last Name</label>
                      </div>
                      </div>
                      <div class="txt_field">
                        <input type="email" value={""} onChange={(e) => setFname(e.target.value)} />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div class="txt_field">
                        <input type="text" value={""} onChange={(e) => setFname(e.target.value)} />
                        <span></span>
                        <label>Phone Number</label>
                      </div>
                      <div class="txt_field">
                        <input type="text"  value={""} onChange={(e) => setFname(e.target.value)} />
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div class="txt_field">
                        <input type="text"  value={""} onChange={(e) => setFname(e.target.value)}/>
                        <span></span>
                        <label>Location</label>
                      </div>
                      <div class="txt_field">
                        <input type="password" value={""} onChange={(e) => setFname(e.target.value)} />
                        <span></span>
                        <label>Password</label>
                      </div>
                    
                    <img  src={require("../assets/photo edit.png")} width={"54px"} alt="edit profile" className="btn btn-light  edit" />
                    <div class="container">
                    <div class="row">
                    <div class="col"><input className="bg-success" type="submit" value="Save"  /></div>
                    <div class="col"><input className="bg-dark" type="reset" value="Clear" /></div>
                    </div>
                    </div>
                    </form>
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
</div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
<div class="container mt-5 w-100 p-5">  
     <h1 className="text-center " >My Shop</h1>  
    <div class="row d-flex justify-content-center mt-5 ">
        <div class="col P-5 ">
            <div class="card p-3 py-4 text-center">
                    {/* <img  src={require("../assets/store.png")} width={"70px"} className="btn btn-light  edit" /> */}


                    <Row xs={2} md={3} className="g-4">
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
