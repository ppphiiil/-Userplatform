import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'

export default function Footer() {
    return (

        <div className="footer">
            <div className="contain">
                <div className="col">
                    <h1>Company</h1>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                      
                    </ul>
                </div>
                <div className="col">
                    <h1>Products</h1>
                    <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li>Unisex</li>
                        <li>Man</li>
                        <li>Woman</li>
                    
                    </ul>
                </div>
                <div className="col">
                    <h1>Accounts</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Resources</h1>
                    <ul>
                        <li>Webmail</li>
                        <li>Redeem code</li>
                        <li>WHOIS lookup</li>
                        <li>Site map</li>
                        <li>Web templates</li>
                        <li>Email templates</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Support</h1>
                    <ul>
                        <li>Contact us</li>
                        <li>Web chat</li>
                        <li>Open ticket</li>
                    </ul>
                </div>
                <div className="col social">
                    <h1>Social</h1>
                    <ul>
                        <li><img src={"https://svgshare.com/i/5eA.svg"}  style={{width: "32px"}} alt="Social"/></li>
                        <li><img src={"https://svgshare.com/i/5f_.svg"}  style={{width: "32px"}} alt="Social"/></li>
                        <li><img src={"https://svgshare.com/i/5fq.svg"}  style={{width: "32px"}} alt="Social"/></li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
         
    )
}
