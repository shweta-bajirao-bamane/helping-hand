// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer id="footer">
//       <div>
//         <div className="title">
//           <img src="https://res.cloudinary.com/dajihyzt2/image/upload/v1732454375/147923910-poverty-people-child-mother-india-illness-grief-street-child-black-and-white-family-homelessness_ko6yep.jpg" />
//           <div className="foot-container">
//             <h1>
//               <span>H</span>elping <span>H</span>and
//             </h1>
//             <div className="para1">
//               <p>There are people who are also stuggling to have shelter and clothes;the world is an utterly depressing place to live now.
//                  You must find some way 
//                 to give shelters to poor people. </p>
//                 <h3>Social Links:</h3>
//                <input type="mail" placeholder="Enter your Email"></input>
//                <button>Subscribe</button>

//             </div>
//             <div className="footer2"  >
//                     <p>Usefull Links</p>
//                      <ul>
//                          <li><a href="#">Privacy Policy</a> </li>
//                          <li><a href="#">Terms & Condition</a></li>
//                          <li><a href="#">Support</a></li>
//                          <li><a href="#">Sitemap</a></li>
//                          <li><a href="#">Disclaimer</a></li>
//                          <li><a href="#">Faq</a></li>
//                      </ul>
//             </div>
//             <div className="footer3"  >
//                     <p>Quick Links</p>
//                      <ul>
//                          <li><a href="#">About Us</a> </li>
//                          <li><a href="#">Services</a></li>
//                          <li><a href="#">Case</a></li>
//                          <li><a href="#">Pricing</a></li>
//                          <li><a href="#">Contact Us</a></li>
                         
//                      </ul>
//             </div>
            
//           </div >
//           <div className="final">
//           <p className="last">© 2024 Helping Hand. All rights reserved.</p>
//           <p className="last">Contact: help@helpinghand.org</p>
//           </div>
          
//         </div>

        
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">

         <h1><span>H</span>elping <span>H</span>ands</h1>
         <p>There are people who are also stuggling to have shelter and clothes;the world is an utterly depressing place to live now.
                 You must find some way 
                 to give shelters to poor people. </p>
          
        <input type="mail" placeholder="Enter your Email"></input>
         <button>Subscribe</button>

        </div>

        <div className="footer-middle">
          <h3>Usefull Links</h3>
          <ul>
            <li><a href="/home">Privacy Policy</a></li>
            <li><a href="/about">Terms & Condition</a></li>
            <li><a href="/services">Support</a></li>
            <li><a href="/products">Disclaimer</a></li>
            <li><a href="/contact">Faq</a></li>
          </ul>
        </div>

        <div className="footer-right">
          
          <h3>Social Links</h3>
       <div className="social-icons">
        <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
&copy; 2024 Helping Hands . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer
