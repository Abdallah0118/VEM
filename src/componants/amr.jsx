import React from "react";
import "./CSS/Home.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
const Home1 = () => {
  return (
    <>
      <div className="container w-100 bg-white overflow-hidden">
        <div className="row flex-row-reverse ">
          <div className="col-md-6 w-50">
            <img
              className="h-100 w-full object-contain sm:h-90 md:h-96 lg:w-full lg:h-full wow animate__animated animate__fadeInLeft"
              src={require("../assets/preview.png")} width={"600px"}
              alt="VEM platform"
            />
          </div>
          <div className="col-md-6 w-50">
            <div
              className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
>

              <div>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

                <div
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                ></div>
              </div>

              <main
                className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
              >
                <div
                  className="sm:text-center lg:text-right wow animate__animated animate__fadeInRight"
                >
                  <h1
                    className="text-3xl mb-5 font-bold text-gray-800 lg:max-w-[80%]"
                  >
                    Build Free Ecommerce Website with VEM
                  </h1>
                  <h3
                    className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl lg:max-w-[80%]"
                  >
                    <span className="block text-emerald-600">
                      It's easy to build a Website but it's hard to satisfy the client.
                    </span>
                  </h3>
                  <p
                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  >
                    VEM platform, understands the clients and their requirments.
                    <br /> We are ready to fullfil all the needs that is essential to make a fully interactive and professional Ecommerce websites
                  </p>
                  <div
                    className="d-flex align-items-end"
                  >
                    <div className="rounded-md shadow">
                      <a
                        to="/Signin"
                        className="btn btn-primary m-1"
                      >
                        Register now                    </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ms-3">
                      <Link
                        to="/Projects"
                        target="_blank"
                        className="btn btn-danger m-1"
                      >
                        Watch demo
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Home1;
