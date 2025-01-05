import React from 'react';
import "./Hero.css";
import SectionTitle from "./SectionTitle";
import Card from "./Card"; 
import {events} from "../data/Data";
import { causes } from "../data/Data";
import CardCauses from "./CardCauses";
import { galleryImages } from "../data/Data";
import "./Gallery.css";

const Hero = () => {
    return(
        <section>
            <div className='full-container'>
                <img src='https://res.cloudinary.com/dajihyzt2/image/upload/v1732369859/b79fa866b685b862cc16c18f935bd14c_nyzxgg.jpg'></img>
                <div className='inside-hero'>
                    <h1>Give The Poor Help<br/> For Families.</h1>
                    <p>These are the purpose of advancing health, education, religion, culture or social or public welfare.Promoting or <br/>
                        protecting human rights, and other purpose beneficial to the public.</p>
                    <button id='btn1'>Donate Now</button>
                    <button id='btn2'>Contact Now</button>
                </div> 
            </div>

            <div className='hero-card'>
                <div className='hero-life'>
                    <h1>Education make a life for <br/>poor children!</h1>
                    <p>This all means that gives is a much more important element of happiness<br/> than receiving. Being 
                        able to give makes us feel like we're making a big impact<br/> on someone life.
                    </p>
                </div>
                <div className='full-hero-card'>
                    <div className='full-card add'>
                        <div className='volunteer-img'>
                            <img src='https://res.cloudinary.com/dajihyzt2/image/upload/v1732380770/two-hands-raised-hands-raise-support-help-volunteer-assist-charity-aid-cooperation-teamwork-gesture-participation-giving-community-hand-icon_727385-14482_yb3evi.jpg' 
                            alt='volunteer'></img>
                        </div>
                        
                        <div className='volunteer'>
                            <h3>Become A Volunteer</h3>
                            <p>You can also donate bedding item to Goodwill. The organization takes gently used linens,
                                including blankets and curtains.
                            </p>
                        </div>
                    </div>
                    <div className='full-card ' id='hero-card-2'>
                        <div className='volunteer-img'>
                            <img src='https://res.cloudinary.com/dajihyzt2/image/upload/v1732380767/5516611_lzclet.png' 
                            alt='volunteer'></img>
                        </div>
                        <div className='volunteer'>
                            <h3>Get Support Directly</h3>
                            <p>You can also donate bedding item to Goodwill. The organization takes gently used linens,
                                including blankets and curtains.
                            </p>
                        </div>
                    </div>
                    <div className='full-card ' id='secCard'>
                        <div className='volunteer-img'>
                            <img src='https://res.cloudinary.com/dajihyzt2/image/upload/v1732387207/donate-and-charity-flat-color-icon-helping-hand-money-png_ssri2y.png' 
                            alt='volunteer'></img>
                        </div>
                        <div className='volunteer'>
                            <h3>Send Us Donate</h3>
                            <p>You can also donate bedding item to Goodwill. The organization takes gently used linens,
                                including blankets and curtains.
                            </p>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
            </div><hr className='tag'></hr><br></br>
           




            <section id="events" className="section">
            <div className="section">
            <SectionTitle 
                 title="Our Events"
                 subtitle="Explore the events aimed at making a difference. This all means that giving is a much more important elements of happiness than receving. Being able to give makes us feel like
                    we're making a big imapct on someone's life.">
                
            </SectionTitle>
            </div>
           
            
            <div className="eventImg">
                {events.map((event) => (
                    <Card 
                        key={event.id}
                        title={event.title}
                        description={event.description}
                        image={event.image}>

                    </Card>
                ))}
            </div>
                <br/><br></br>
        </section><hr className='tag'></hr><br></br>
        


        <section id="causes" className="section">
      <SectionTitle
        title="Our Causes"
        subtitle="This all mean that giving is a much more important element of happiness than receivin. Being able to give makes us feel like we're making a big impact on someone's life."
      />
      <div className="cards-container">
        {causes.map((cause) => (
          <CardCauses
            key={cause.id}
            title={cause.title}
            description={cause.description}
            image={cause.image}
          />
        ))}
      </div><br></br><br></br><br></br>
    </section><hr className='tag'></hr><br/>

    
    <section id="gallery" className="section gallery">
      <SectionTitle
        title="Our Photo Gallery"
        subtitle="This all means that giving is a much more important elements of happiness than receving. Being able to give makes us feel like
                    we're making a big imapct on someone's life."
      />
      <div className="gallery-container">
        {galleryImages.map((img, index) => (
          <img key={index} src={img} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </section><br></br><br></br>


           
        </section>


    )
}
export default Hero