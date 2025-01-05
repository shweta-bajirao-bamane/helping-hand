import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card"; 
import {events} from "../data/Data";

const EventSection = () => {
    return(
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
                <br/>
        </section>
       
    )
}
export default EventSection