import React from "react";


function Footer(){
    return(
        <>
            <div className="container-fluid p-5 footer-bg">
                <div className="container  ">
                    <div className="row  d-flex justify-content-between ">
                        <div className="footer-card p-0 d-flex justify-content-between align-items-start flex-column">
                            <p className=" m-0 navbar-h1 p-0 tracking-in-contract-bck">SHOP.CO</p>
                            <p className="footer-card-p m-0">We have clothes that suits your style and which you’re proud to wear. From  women to men.</p>
                            <div className="col-8 d-flex align-items-center justify-content-between ">
                                <div className="footer-icon d-flex justify-content-center align-items-center  p-0 "><i class="fa-brands fa-twitter "></i></div>
                                <div className="footer-icon-black   text-white d-flex justify-content-center p-0 align-items-center"><i class="fa-brands fa-facebook-f"></i></div>
                                <div className="footer-icon d-flex  justify-content-center align-items-center p-0 text-black "><i class="fa-brands fa-instagram "></i></div>
                                <div className="footer-icon  d-flex justify-content-center align-items-center p-0 text-black"><i class="fa-brands fa-github "></i></div>
                            </div>
                        </div>
                        <div className="footer-card p-0 d-flex flex-column justify-content-between  ">
                            <p className="mb-2 span">Company</p>
                            <div className="dads-of-p-footer-card d-flex flex-column justify-content-between align-items-start">
                                <p>About</p>    
                                <p>Features</p>      
                                <p>Works</p>     
                                <p>Career</p> 
                            </div>
                        </div>
                        <div className="footer-card d-flex flex-column justify-content-between p-0">
                            <p className="span mb-2">Help</p>
                            <div className="dads-of-p-footer-card d-flex flex-column justify-content-between align-items-start">
                                <p>Customer Support</p>
                                <p>Delivery Details</p>
                                <p> Terms & Conditions</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <div className="footer-card d-flex flex-column justify-content-between p-0">
                            <p className="span mb-2">FAQ</p>
                            <div className="dads-of-p-footer-card d-flex flex-column justify-content-between align-items-start">
                                <p>Account</p>
                                <p>Manage Deliveries</p>
                                <p>Orders</p>
                                <p>Payments</p>
                            </div>
                        </div>
                        <div className="footer-card d-flex flex-column justify-content-between p-0">
                            <p className="span mb-2">Resources</p>
                            <div className="dads-of-p-footer-card d-flex flex-column justify-content-between align-items-start">
                                <p>Free eBooks</p>
                                <p>Development Tutorial</p>
                                <p>How to - Blog</p>
                                <p>Youtube Playlist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;