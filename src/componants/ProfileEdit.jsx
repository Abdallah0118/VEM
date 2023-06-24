import "./CSS/Profile.css";
// import { Card,Button, Col ,Row } from "react-bootstrap";
import React, { useState, useEffect,useRef } from 'react';
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
  const [ProfilePicture,setProfilePicture] = useState(null);
  const inputRef = useRef(null);
  const handleFileChange = (event) => {
    setProfilePicture(event.target.files[0]);
  }; 
  const handlePhotoClick = () => {
    inputRef.current.click();
  };

  // <input type="file" name="photo" onChange={handleFileChange} />
  // <img  src={require("../assets/photo edit.png")} width={"54px"} alt="edit profile"  ref={inputRef} onClick={handlePhotoClick}  className="btn btn-light  edit" />
   
  useEffect(() => {
    // fetch user data from backend when component mounts
    axios.get(`http://localhost:8000/profile/1`)
      .then(response => {
        setUser(response.data);
        setFname(response.data.User.first_name);
        setLname(response.data.User.last_name);
        setEmail(response.data.User.email);
        setPhone(response.data.User.phone);
        setBirthdate(response.data.User.birth_date);
        setLocation(response.data.User.location);
        setPassword(response.data.User.password);
        setProfilePicture(response.data.User.profile_picture);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedUser = {lname,fname,email,phone,birthdate,location,password,ProfilePicture};
    
    try {
      const response = await axios.put('http://localhost:8000/profile/edit/1', updatedUser,{ headers: {
        'Content-Type': 'application/json'
      }}
      );
      console.log(response.data);
      console.log(updatedUser);
    } catch (error) {
      console.error(error);
      console.log(updatedUser);
    }
  };

  // const updatedUser = {lname, fname, email, phone, birthdate, location, password, ProfilePicture};

  // const formData = new FormData();
  // formData.append('lname', updatedUser.lname);
  // formData.append('fname', updatedUser.fname);
  // formData.append('email', updatedUser.email);
  // formData.append('phone', updatedUser.phone);
  // formData.append('birthdate', updatedUser.birthdate);
  // formData.append('location', updatedUser.location);
  // formData.append('password', updatedUser.password);
  // formData.append('ProfilePicture', updatedUser.ProfilePicture);
  
  // try {
  //   const response = await axios.put('http://localhost:8000/profile/edit/1', formData, { headers: {
  //     'Content-Type': 'multipart/form-data'
  //   }});
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }
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
  <div className="container mt-2 w-50">
    
    <div className="row d-flex justify-content-center">
        <div className="col">
            <div className="card ">
                <div className="text-center">
                    <img src={require("../assets/user.jpg")} onChange={(e) => setProfilePicture(e.target.value)} width="150" alt="UserPhoto" class="rounded-circle"/>
                </div>
                              <div className="text-center mt-3 p-3">
                    {/* <span className="bg-pramary p-1  rounded text-white">{}</span> */}
                    <h5 className=" mb-0">{fname} {lname} </h5>
                    {/* <span>UI/UX Designer</span> */}
                    
                    {/* <div className="p-4 mt-1">
                        {/* <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                    
                    {/* </div  > */}
                    {user ? (
                    // <>
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex justify-content-between ">
                      <div className="txt_fieldedit  " >
                        <input type="text"   value={fname} onChange={(e) => setFname(e.target.value)}   />
                        <span></span>
                        <label>first Name</label>
                      </div>
                      <div className="txt_fieldedit ">
                        <input type="text"   value={lname} onChange={(e) => setLname(e.target.value)}/>
                        <span></span>
                        <label>Last Name</label>
                      </div>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <span></span>
                        <label>Phone Number</label>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="text"  value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="text"  value={location} onChange={(e) => setLocation(e.target.value)}/>
                        <span></span>
                        <label>Location</label>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span></span>
                        <label>Password</label>
                      </div>
                      <input type="file" name="photo" onChange={handleFileChange} style={{ display: "none" }} />
                    <img 
                      src={require("../assets/photo edit.png")} 
                      width={"54px"} 
                      alt="edit profile"
                      ref={inputRef}
                      onClick={handlePhotoClick}  
                      className="btn btn-light edit" 
                       />
                    <div className="container">
                    <div className="row">
                    <div className="col"><input className="btn-success" type="submit" value="Save"  /></div>
                    <div className="col"><input className=" bts bg-dark" type="reset" value="reset" /></div>
                    </div>
                    </div>
                    </form>
                    ) : (   
                      <div className="text-center p-4">
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
  </>
  );
};

export default Profile;
