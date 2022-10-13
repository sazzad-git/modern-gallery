import React from "react";
import { Row } from "react-bootstrap";

import modernArt1 from "../../images/modern-art/modern3.jpg";
import modernArt2 from "../../images/modern-art/traditional2.jpg";
import modernArt3 from "../../images/modern-art/graphic.jpg";
import modernArt4 from "../../images/modern-art/ui-ux.jpg";
import modernArt5 from "../../images/modern-art/singing.jpg";
import modernArt6 from "../../images/modern-art/danching.jpg";
import CardItem from "../CardItem/CardItem";

const modernArts = [
  { id: 1, name: "Modern art", img: modernArt1, button: "View" },
  { id: 2, name: "Traditional art", img: modernArt2, button: "View" },
  { id: 3, name: "Graphic Designer", img: modernArt3, button: "Follow" },
  { id: 4, name: "UI/UX Designer", img: modernArt4,button: "Follow"  },
  { id: 5, name: "Singing", img: modernArt5,button: "Follow"  },
  { id: 6, name: "Dancing", img: modernArt6,button: "Follow"  },
];

const Cards = () => {
  return (
    <div id='cards' className='container bg-danger'>
            <h2 className='text-light text-center mt-5'>Our Products</h2>
            <Row xs={1} md={3} className="g-4 ">
                {
                    modernArts.map(modernArt => <CardItem
                        key={modernArt.id}
                        modernArt= {modernArt}
                    ></CardItem>)
                }
            </Row>
        </div>
  );
};

export default Cards;
