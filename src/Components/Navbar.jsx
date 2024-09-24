import React from "react";

function Navbar() {
  return (
    <>
      <div className="container-fluid p-4">
        <div className="container ">
          <div className="row  ">
            <div className="col-1 align-items-center     d-flex d-xl-none ps-1"><i class="fa-solid fa-bars fs-4"></i></div>
            <div className="col-8 col-xl-2   p-1">
              <p className=" m-0 navbar-h1 p-0 tracking-in-contract-bck">SHOP.CO</p>
            </div>
            <div className=" col-xl-4 d-none d-xl-flex  ">
              <ul className="justify-content-xl-between d-xl-flex w-100 align-items-center h-100 p-0 m-0 ">
                <div class="dropdown">
                  <button class="btn-nav border-0  p-0 bg-transparent btn-white dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button class="dropdown-item " type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item " type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item " type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
                <li className="btn-nav">On Sale </li>
                <li className="btn-nav">New Arrivals </li>
                <li className="btn-nav">Brands</li>
              </ul>
            </div>
            <div className="col-5 d-none d-xl-flex ">
                <form className="border d-flex h-100  p-1 form  w-100">
                    <p className="logo m-0"><i class="fa-solid fa-magnifying-glass text-secondary ps-1 fs-6"></i></p>
                    <input className="border-0 w-100 nav-input ps-2" type="search" name="" id="" placeholder="Search for products..." />
                </form>
            </div>
            <div className="col-3 col-xl-1  d-flex align-items-center justify-content-between justify-content-xl-evenly p-1 m-0">
                <span className="fa-solid fa-magnifying-glass icon-nav  d-flex d-xl-none  fs-5"></span>
                <span><i class="fa-solid fa-cart-shopping fs-5 icon-nav shadow-inset-tb"></i></span>
                <i class="fa-regular fa-circle-user shadow-inset-tb icon-nav fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
