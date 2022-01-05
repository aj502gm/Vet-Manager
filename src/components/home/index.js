import React, {useState} from 'react';
import "../../css/tableDesign.css";
import Banner from './header/Header';
import Table from "./body/index";
import DateCard from './body/datesCards';
import BodyCard from './body/datesCards/bodyCard';
import "../../css/tableDesign.css";
import "../../css/datesDesign.css";
import Carousel from "react-simply-carousel";
function Body (){
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <div id="content">
            <h1 className = "main-banner">Home</h1>
            <div className = "" style = {{marginBottom: "10px"}}>
              <Carousel
                updateOnItemClick
                containerProps={{
                  style: {
                    width: "100%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }
                }}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                  style: {
                    background: "blue"
                  }
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                  children: ">",
                  style: {
                    width: 30,
                    height: 30,
                    minWidth: 30,
                    alignSelf: "center",
                    background: "rgb(102, 0, 102)",
                    border: "none",
                    borderRadius:5,
                    fontFamily: 'Raleway', 
                    color: "white",
                    
                  }
                }}
                backwardBtnProps={{
                  children: "<",
                  style: {
                    width: 30,
                    height: 30,
                    minWidth: 30,
                    alignSelf: "center",
                    background: "rgb(102, 0, 102)",
                    border: "none",
                    borderRadius:5,
                    fontFamily: 'Raleway', 
                    color: "white",
                  }
                }}
                itemsToShow={5}
                speed={400}
              >
                {Array.from({ length: 10 }).map((item, index) => (
                  <div
                    style={{
                      background: "red",
                      width: 200,
                      height: 200,
                      border: "30px solid white",
                      textAlign: "center",
                      lineHeight: "240px",
                      boxSizing: "border-box",
                      borderRadius:10,
                    }}
                    key={index}
                  >
                    {index}
                  </div>
                ))}
              </Carousel>
            </div>
            <div className = "info-wrapper">
                <div className="limiter">
                    <div className="container-table100">
                        <div className="wrap-table100">
                            <div className="table100">
                                <Table></Table>
                            </div>
                        </div>
                    </div>
                </div>
                <section className = " info">
                    <BodyCard></BodyCard>
                </section>
            </div>
            
        </div>
    )
}

export default Body;