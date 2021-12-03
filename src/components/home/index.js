import React from 'react';
import "../../css/tableDesign.css";
import Banner from './header/Header';
import Table from "./body/index"
function Body (){
    return (
        <div id="content">
            <h1 className = "main-banner">Home</h1>
            <div className = "main-dashboard">
               <Banner name = "pets" value = "5"/>
               <Banner name = "owners" value = "5"/>
               <Banner name = "Doctors" value = "5"/>
               <Banner name = "Species" value = "5"/>
            </div>
            <div className="limiter">
                <div className="container-table100">
                    <div className="wrap-table100">
                        <div className="table100">
                            <Table></Table>
                        </div>
                    </div>
                </div>
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
