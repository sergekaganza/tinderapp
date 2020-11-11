import TinderCard from "react-tinder-card";
import React, { useState } from "react";
import "./TinderCards.css";


function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: "Elon Musk",
        url: 
        "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
        },
         {
          name: "Jeff Bezos",
          url: 
          "https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2019.2F02.2F01.2F81f08c3b-e24e-4d23-bdf9-634afab4f698.2Ejpeg/1442x999/quality/80/jeff-bezos.jpeg",
         },
         {
          name: "Sandra Bullock",
          url:
          "https://upload.wikimedia.org/wikipedia/commons/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg",
         },
         {
         name:"Ellen Degeneres",
         url:
         "https://akns-images.eonline.com/eol_images/Entire_Site/202073/rs_600x600-200803102135-600-Ellen-DeGeneres.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top",
         },
         {
         name: "Nathalie Portman",
         url:
         "https://static.timesofisrael.com/fr/uploads/2018/12/AP_18285729057974.jpg",
         },
         {
         name:"Michael Douglas",
         url:
         "https://upload.wikimedia.org/wikipedia/commons/3/38/Michael_Douglas_C%C3%A9sar_2016_3.jpg",

        },
    ]);
    const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                     <div
                       style={{ backgroundImage: `url(${person.url})` }}
                       className="card"               
                     >
                       <h3>{person.name}</h3>
                     </div>
                </TinderCard>   
               ))}  
            </div>        
        </div>
    );
}

export default TinderCards;
