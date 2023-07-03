import React, { useEffect, useState } from "react";
import "./CSS/DisplayShop.css";
import { Col, Row ,Container } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import StoreItem from "./StoreItem";
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router";


const ShopDisplayOwner  = () => {
// ================================================================================================
const [userInfo, setUserInfo] = useState(null);
const [shopInfo, setShopInfo] = useState(null);
const [storeItems, setstoreItems] = useState([]);
const [shopComments, setShopComments] = useState([]);
const [gotDataProduct, setGotDataProduct] = useState(false);
const [commentBody, setCommentBody] = useState('');
const [userId, setUserId] = useState(null);
const navigate = useNavigate();


// const [accessToken,setAccessToken]=useState(null)
useEffect(() => {
 const accessToken =localStorage.getItem("access");
  if (accessToken) {
    const decodedToken = jwt_decode(accessToken);
    setUserId(decodedToken.user_id);
  }
  const getShopDetails= async ()=>{
    axios.get('http://localhost:8000/shop/myshop',{
      headers: {
      Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => setShopInfo(response.data), 
      )
      
      .catch(error => console.log(error));
  }
  getShopDetails()
  if(shopInfo){
       localStorage.setItem('myShopID',shopInfo.id)
  }
 

  // getProductData();
}, []);
const my_shop_id=localStorage.getItem('myShopID')


const getProductData = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/shop/myshop/products/?shop_id=${my_shop_id}`);
    const products = response.data;
    setstoreItems(products);

  } catch (error) {
    console.log(error);
  }
};
const getCommentsData = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/shop/myshop/comments/?shop_id=${my_shop_id}`);
    const comments = response.data;
    setShopComments(comments);
    console.log("coments"+response.data);
  } catch (error) {
    console.log(error);
  }

};
// getProductData();

if(shopInfo){
  localStorage.setItem('myShopID',shopInfo.id)
  localStorage.setItem('userID',userId)
  localStorage.setItem('ownerID',shopInfo.owner.id)
  if(!gotDataProduct){
    setGotDataProduct(true)
    getProductData(); 
    getCommentsData()
  }

}
function handleSubmitComment(event) {
  event.preventDefault();
  const accessToken =localStorage.getItem("access");

  axios.post('http://localhost:8000/shop/myshop/comments/create/', {
    shop: my_shop_id,
    user:userId,
    comment_body: commentBody
  },{
    headers: {
    Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(response => {

      getCommentsData()
      setCommentBody("")
      // do something with the response, e.g. update the comment list
    })
    .catch(error => {
      console.error(error);
    });
}

// -------------------------------------------------------------------------------------------------------------  
  return (
    <>
    {/* {shopInfo ? getProductData():console.log('hello')} */}
    <div className="shop-banner">
    {shopInfo ?(
      <img className="shop-banner-img" src={shopInfo.image ? `http://localhost:8000/${shopInfo.image}` : require("../assets/user.jpg")} alt="UserPhoto" />
      ): (   
        <div className="text-center p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )}
      </div>
    <div className="shop-details">
      {shopInfo ?(
        <>
        <h2 className="mt-2 mt-5 " style={{textAlign:"center"}}><span className="shop-title">{shopInfo.title}</span>  </h2>
        <div className="text-center p-4 ">
              
             
                <p className=" element"><h4><span className="title-detail">Owner</span>: <span style={{marginLeft:"1%"}}>{shopInfo.owner.first_name} {shopInfo.owner.last_name}</span> </h4></p>
             
              
                <p className=" element"><p><span className="title-detail">details</span>:  <span style={{marginLeft:"1%"}}>{shopInfo.details}</span></p></p>
            
              
                <p className=" element"><span className="title-detail">Category</span>:  <span style={{marginLeft:"1%"}}>{shopInfo.category.name}</span></p>
                <p className=" element"><span className="title-detail">Rate</span>:  <span style={{marginLeft:"1%"}}>{shopInfo.total_rate}</span>  <span  className="title-detail " style={{marginLeft:"40%"}}>Report Count</span>:  <span style={{marginLeft:"1%"}}>{shopInfo.report_count}</span></p>
              
              
                    
                    {/* <span className=".text-primary p-1 px-4 rounded " style={{display: userInfo.is_seller ? "inline" : "none"}}>Seller</span> */}
                    {/* <img src={require("../assets/quality.png")} width="30" alt="quality" style={{display: userInfo.is_active? "inline" : "none"}}/> */}
                    {/* <span>UI/UX Designer</span> */}                    
        </div  > 
        <div className="shop-rate">

                  {shopInfo.owner.id!=userId?(<>
                    <h3>Add Comment</h3>
                    <form onSubmit={handleSubmitComment}>
                      <label>
                      
                        <input type="text" placeholder="Comment..." className=" add-comment" value={commentBody} onChange={event => setCommentBody(event.target.value)} />
                      </label>
                      <br />
                      <button className="btn btn-primary" type="submit">Comment</button>
                    </form> 
                    </>
                    ):(
                    <div style={{textAlign:"center"}}>
                        <h2>Wish Your Shop Going Well (^_^)</h2>
                    </div>
                    )}
          </div>       
        </> 
        ): (   
          <div className="text-center p-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      
      )}
    </div>
    
    <div className="shop-store">
      
          <div className=" p-4">
                  <h1>Store</h1>
                  <button className="btn btn-primary my-4"  variant="warning"
                    onClick={() => {
                    navigate(`/shop/addproduct`);
                    }}>Add Product</button>
                  {shopInfo ?(
                <div className=" container-fluid shop-store-container">
                  <br />
                  <Row md={3} xs={1} sm={2} lg={4} className="g-3">
                    {storeItems &&
                      storeItems.map((item) => (
                        <Col key={item.id} style={{ padding: "1%" }}>
                          <StoreItem {...item}></StoreItem>
                        </Col>
                      ))}
                  </Row>
                </div>                
                  ): (   
                    <div className="text-center p-5">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
          </div  >        
    </div>
    <div className="shop-comments">
      {shopInfo ?(
          <div className=" p-4">
                  <h1>Comments</h1>
                <div className=" container-fluid shop-store-container">
                  <br />
                  <div  className="">
                    {shopComments &&
                      shopComments.map((item) => (
                        <Col key={item.id} style={{ padding: "" }}>
                          <div className="comment-label">
                            <span className="user-comment">{item.user.first_name} {item.user.last_name}</span>
                            {shopInfo.owner.id==item.user.id?(<span style={{backgroundColor:"black",color:"white",padding:"10px",marginRight:"10px",borderRadius:"10px",fontWeight:"bolder"}}>Owner </span>):("")}
                            <span>{item.report_count} </span>
                            <p className="body-comment">{item.comment_body} </p>
                          </div>
                        </Col>
                        
                      ))}
                  </div>
                </div>  
                {localStorage.getItem("access")?(<>
                <h3>Add Comment</h3>
                <form onSubmit={handleSubmitComment}>
                  <label>
                   
                    <input type="text" placeholder="Comment..." className=" add-comment" value={commentBody} onChange={event => setCommentBody(event.target.value)} />
                  </label>
                  <br />
                  <button className="btn btn-primary" type="submit">Comment</button>
                </form> 
                </>
                ):(
                <div>
                    <h2>You Need Login To add Comment</h2>
                </div>
                )}
                             
          </div  >        
                      ): (   
            <div className="text-center p-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
    </div>
  

 </>
  );
};

export default ShopDisplayOwner;

