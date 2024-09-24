import React from "react";
import versace from "../zara_Images/Vector (3).png"
import zara from "../zara_Images/zara-logo-1 1.png"
import gucci from "../zara_Images/gucci-logo-1 1.png"
import prada from "../zara_Images/prada-logo-1 1.png"
import CalvinKlein from "../zara_Images/Vector (4).png"
import clothes1 from "../zara_Images/image 7.png"
import clothes2 from "../zara_Images/image 8.png"
import clothes3 from "../zara_Images/image 9.png"
import clothes4 from "../zara_Images/image 10.png"
import clothes5 from "../zara_Images/image 7 (1).png"
import clothes6 from "../zara_Images/image 8 (1).png"
import clothes7 from "../zara_Images/image 9 (1).png"
import clothes8 from "../zara_Images/image 10 (1).png"



function Home(){

   

    return(
        <>
            <div className="container-fluid p-xl-4 p-3 p-xl-5 home-bg">
                <div className="container mt-xl-5">
                    <div className="row ">
                        <div className="col-12 col-xl-6 home-1box p-0">
                            <p className="home-h1 tracking-in-expand w-100 ">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</p>
                            <p className="home-text tracking-in-expand-fwd-bottom">Browse through our diverse range of meticulously crafted garments, designed  to bring out your individuality and cater to your sense of style.</p>
                            <button className="home-btn   mt-2">Shop now</button>
                            <div className="row mt-xl-5 mt-2">
                                <div className="col-12 home-bottom-box-mobile d-flex justify-content-between ">
                                    <div className="col-xl-4 col-6 three-blocks border-end border-3 border-xl-none justify-content-center flex-column align-items-start d-flex">
                                        <p className="text-dark home-three-block-num-text  p-0 m-0">200+</p>
                                        <span className="home-span">International Brands</span>
                                    </div>
                                    <div className="col-xl-4 col-6 three-blocks  justify-content-center flex-column align-items-center d-flex">
                                        <p className="text-dark home-three-block-num-text p-0 m-0">2,000+</p>
                                        <span className="home-span">High-Quality Products</span>
                                    </div>
                                    <div className="col-xl-4  d-none d-xl-flex justify-content-center flex-column align-items-center d-flex">
                                        <p className="text-dark home-three-block-num-text p-0 m-0">30,000+</p>
                                        <span className="home-span">Happy Customers</span>
                                    </div>
                                </div>
                                <div className="col-12 mt-3 d-xl-none justify-content-center flex-column align-items-center d-flex">
                                    <p className="text-dark home-three-block-num-text p-0 m-0">30,000+</p>
                                    <span className="home-span  ">Happy Customers</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-6">
                            <img src="" alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="container-fluid p-xl-5  p-0 home-bottom-pg-bg ">
                <div className="container p-0">
                    <div className="row d-flex justify-content-between  p-xl-0   p-4  ">
                        <div className="col-xl-2   p-xl-1 p-0 m-0 d-flex justify-content-start "><img src={versace} alt="" /></div>
                        <div className="col-xl-1 mb-2 mt-2  p-xl-1 p-0 m-xl-0 d-flex justify-content-center "><img src={zara} alt="" /></div>
                        <div className="col-xl-2  p-xl-1 p-0 m-0 d-flex justify-content-end "><a href="https://www.gucci.com/int/ru/?srsltid=AfmBOoraAlJgR8hW_oV84BQ6poYM_Qo9BOJ4E7CGB86zF2ZTZWho-sI6"><img src={gucci} alt="" /></a></div>
                        <div className="col-xl-2 mb-3 mt-2 p-xl-2 p-0 m-xl-0 d-flex justify-content-start  "><img src={prada} alt="" /></div>
                        <div className="col-xl-3   p-xl-1 p-0 m-0 d-flex justify-content-center "><img src={CalvinKlein} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid s1 p-xl-5 m-0 p-2 ">
                <div className="container ">
                    <p className="s1-text text-center mb-xl-5 mb-1 mt-1 ">NEW ARRIVALS</p>
                    <div className="row d-flex gy-3 justify-content-between">
                        <div className="col-xl-3 col-6   p-0  card-s1">
                            <img className=" w-100" src={clothes1} alt="" />
                            <p className="s1-card-p mb-0">T-SHIRT WITH TAPE DETAILS</p>
                            <div className="eveluate  d-flex align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <p className="star-text p-0 m-0">4.5/ <del className="text-secondary">5</del></p>
                            </div>
                            <p className="price">$120 </p>
                        </div>
                        <div className="col-xl-3 col-6  p-0  card-s1">
                            <img className="img-o  w-100" src={clothes2} alt="" />
                            <p className="s1-card-p mb-0">SKINNY FIT JEANS</p>
                            <div className="eveluate  d-flex align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <p className="star-text p-0 m-0">3.5/ <del className="text-secondary">5</del></p>
                            </div>
                            <p className="price  d-flex justify-content-between">$120 <span>$260</span> <div className="span2 p-2">-30%</div></p>
                        </div>
                        <div className="col-xl-3 col-6 p-0 card-s1">
                            <img className=" w-100" src={clothes3} alt="" />
                            <p className="s1-card-p mb-0">CHECKERED SHIRT</p>
                            <div className="eveluate  d-flex align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <p className="star-text p-0 m-0">4.5/ <del className="text-secondary">5</del></p>
                            </div>
                            <p className="price">$120</p>
                        </div>
                        <div className="col-xl-3 col-6  p-0    card-s1">
                            <img className="  w-100" src={clothes4} alt="" />
                            <p className="s1-card-p mb-0">SLEEVE STRIPED T-SHIRT</p>
                            <div className="eveluate d-flex align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <p className="star-text p-0 m-0">4.5/ <del className="text-secondary">5</del></p>
                            </div>
                            <p className="price d-flex justify-content-between ">$120 <span>$260</span> <div className="span2 p-2">-30%</div></p>
                        </div>
                    </div>
                    <button className="view-all1 text-center mx-auto mt-5 mb-5 ">View All</button>
                </div>
            </div>
            <div className="container-fluid   p-xl-5 m-0 p-2 ">
                <div className="container ">
                    <p className="s1-text text-center mb-xl-5 mb-1 mt-1">TOP SELLING</p>
                    <div className="row d-flex gy-3 justify-content-between">
                        <div className="col-xl-3 col-6  p-0  card-s1">
                            <img className=" w-100" src={clothes5} alt="" />
                            <p className="s1-card-p mb-0">T-SHIRT WITH TAPE DETAILS</p>
                            <div className="eveluate  d-flex align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <p className="star-text p-0 m-0">4.5/ <del className="text-secondary">5</del></p>
                            </div>
                            <p className="price">$120 </p>
                        </div>
                        <div className="col-xl-3 col-6 p-0  card-s1">
                            <img className="img-o  w-100" src={clothes6} alt="" />
                            <p className="s1-card-p mb-0">SKINNY FIT JEANS</p>
                            <div className="eveluate  d-flex align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <p className="star-text p-0 m-0">3.5/ <del className="text-secondary">5</del></p>
                            </div>
                            <p className="price  d-flex justify-content-between">$120 <span>$260</span> <div className="span2">-30%</div></p>
                        </div>
                        <div className="col-xl-3 col-6 p-0 card-s1">
                            <img className=" w-100" src={clothes7} alt="" />
                            <p className="s1-card-p mb-0">CHECKERED SHIRT</p>
                            <div className="eveluate  d-flex align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <p className="star-text p-0 m-0">4.5/ <del className="text-secondary">5</del></p>
                            </div>
                            <p className="price">$120</p>
                        </div>
                        <div className="col-xl-3 col-6 p-0    card-s1">
                            <img className=" img-o w-100" src={clothes8} alt="" />
                            <p className="s1-card-p mb-0">SLEEVE STRIPED T-SHIRT</p>
                            <div className="eveluate d-flex align-items-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <p className="star-text p-0 m-0">4.5/ <del className="text-secondary">5</del></p>
                            </div>
                            <p className="price d-flex justify-content-between ">$120 <span>$260</span> <div className="span2">-30%</div></p>
                        </div>
                    </div>
                    <button className="view-all1 text-center mx-auto mt-5 mb-5 ">View All</button>
                </div>
            </div>
            <div className="container-fluid p-5  ">
                <div className="container border p-5 grid-section">
                    <p className="grid-section-p text-center mb-5">BROWSE BY DRESS STYLE</p>
                    <div className="row gy-4  d-flex justify-content-between  gx-3">
                        <div className="col-4 p-4 grid  ">
                            <p className="grids-text">Casual</p>
                        </div>
                        <div className="col-8 grid p-4 ">
                            <p className="grids-text">Formal</p>
                        </div>
                        <div className="col-8 grid  p-4">
                            <p className="grids-text">Party</p>
                        </div>
                        <div className="col-4 grid p-4  ">
                            <p className="grids-text">Gym</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;