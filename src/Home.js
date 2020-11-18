import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import TravelCard from "./TravelCard";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section2">
        <TravelCard 
          src="https://a0.muscache.com/im/pictures/558a403a-aeed-4829-83a6-c9b0ccf21866.jpg?im_q=medq&im_w=720"
          title="Fredericksburg"
          description="3 hours drive"
        />
        <TravelCard 
          src="https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=720"
          title="Canyon Lake"
          description="3.5 hour drive"
        />
        <TravelCard 
          src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=720"
          title="South Padre Island"
          description="8 hour drive"
        />
        <TravelCard 
          src="https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=720"
          title="Conroe"
          description="3 hours"
        />
        
      </div>
      <div className="home__section2">
      <TravelCard 
          src="https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=720"
          title="Lake Charles"
          description="2.5 hours"
        />
        <TravelCard 
          src="https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=720"
          title="Galveston"
          description="1.5 hours"
        />
        <TravelCard 
          src="https://a0.muscache.com/im/pictures/7a0735b6-b341-4d2c-a0ab-8fa01d1373fb.jpg?im_q=medq&im_w=720"
          title="San Antonio"
          description="3 hours"
        />
        <TravelCard 
          src="https://a0.muscache.com/im/pictures/0810e005-87d3-4188-b95c-2d7fa2fc957b.jpg?im_q=medq&im_w=720"
          title="Austin"
          description="4 hours"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Townhouse in Upper Kirby"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="$130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in Washington Ave"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
        />
      </div>
    </div>
  );
}

export default Home;
