import React, {useState} from 'react';
import "../../css/tableDesign.css";
import Banner from './header/Header';
import Table from "./body/index";
import DateCard from './body/datesCards';
import BodyCard from './body/datesCards/bodyCard';
import "../../css/tableDesign.css";
import "../../css/datesDesign.css";

function Body (){
    
    return (
        <div id="content">
            <h1 className = "main-banner">Home</h1>
            <div className = "" style = {{marginBottom: "10px"}}>
              <Banner></Banner>
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