import React from "react";
import Phn from '../Image/phn.png'
import Msg from '../Image/msg.png'
import Location from '../Image/location.png'
import Fb from '../Image/fb.png'
import Ig from '../Image/ig.png'
import Twiter from '../Image/twiter.png'

const Section9 = () => {
    return(
    <div className="sec9">
        <div className="sec9-part1">
            <div>
               <h2>Consulting Agency For Your Business</h2>
               <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div>
                <button>Contact Us</button>
            </div>
        </div>
        <div className="sec9-part2">
            <div>
                <h3>Company Info</h3>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div>
                <h3>Legal</h3>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div>
                <h3>Features</h3>
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
            </div>
            <div>
                <h3>Resources</h3>
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
            </div>
            <div>
                <h3>Get In Touch</h3>
                <p><img src={Phn} alt="Image not available"></img> (480) 555-0103</p>
                <p><img src={Location} alt="Image not available"></img> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p><img src={Msg} alt="Image not available"></img> debra.holt@example.com</p>
            </div>
        </div>
        <div className="foot">
            <div>
                <p>Made With Love By Finland All Right Reserved </p>
            </div>
            <div>
                <ul>
                    <li><img src={Fb} alt="Image not available"></img></li>
                    <li><img src={Ig} alt="Image not available"></img></li>
                    <li><img src={Twiter} alt="Image not available"></img></li>
                </ul>
            </div>
        </div>

    </div>
    )
}
export default Section9