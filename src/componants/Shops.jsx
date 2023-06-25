import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shops = () => {
  const [shops, setShops] = useState([]);

  const getShops = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const products = response.data;
      setShops(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <div className="container">
      {shops &&
        shops.map((item) => (
          <div key={item.id}>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <Link to="/">
                    <img
                      src={item.image}
                      class="img-fluid rounded-start fit"
                      alt="Shop"
                      style={{ height: "200px" }}
                    />
                  </Link>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title fw-bold">
                      {item.title.split(" ").slice(0, 2).join(" ")}
                    </h4>
                    <p class="card-text">
                      <span className=" fw-bold">Description : </span>
                      {item.description.split(" ").slice(0, 20).join(" ")}
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Owner : {item.name}{" "}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shops;
