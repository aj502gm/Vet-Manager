import React from 'react';
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
            <div className = "main-dashboard">
               <Banner name = "Pets" value = "5"/>
               <Banner name = "Owners" value = "5"/>
               <Banner name = "Dates" value = "5"/>
               <Banner name = "Species" value = "5"/>
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
/*
<tbody>
                                        <tr>
                                            <td className="column1">Main</td>
                                            <td className="column2">Null</td>
                                            <td className="column3">Null</td>
                                            <td className="column4">Null</td>
                                           
                                        </tr>
                                        
                                </tbody>
*/ 



/*
<div className="main-dashboard-graphs">
                <canvas id = "myChart">
                    
                </canvas>
            </div>


*/ 
