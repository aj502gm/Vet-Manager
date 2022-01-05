import React, {useState} from 'react'
import Carousel from "react-simply-carousel";
import HeaderCardElement from './HeaderCardElement';
function Banner({name, value}) {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
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
                <HeaderCardElement></HeaderCardElement>
                <HeaderCardElement></HeaderCardElement>
                <HeaderCardElement></HeaderCardElement>
                <HeaderCardElement></HeaderCardElement>
                <HeaderCardElement></HeaderCardElement>
                <HeaderCardElement></HeaderCardElement>
            </Carousel>
    )
}

export default Banner;
