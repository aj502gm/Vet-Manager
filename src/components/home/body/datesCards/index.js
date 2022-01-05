import React, {useState, useEffect} from 'react'

function DateCard({id_appointment,id_pet,dueDay,dueMonth,dueYear,availability, descriptionProblem}) {
    
    return (
        <div class="card">
            <h2>{dueDay + "/" + dueMonth + "/" + dueYear}</h2>
            <p>{"Pet ID:" + id_pet}</p>
            <br></br>
            <p>{descriptionProblem}</p>
            <input type = "button" value = "Clear" className = "btn btn-table btn-clear" ></input>
            <input type = "button" value = "Delete" className = "btn btn-table btn-delete" ></input>
            <input type = "button" value = "Pospon" className = "btn btn-table btn-modify" ></input>
            
        </div>
    )
}

export default DateCard
