import React, {useState, useEffect} from 'react'

function DateCard({id_appointment,id_pet,dueDay,dueMonth,dueYear,availability, descriptionProblem}) {
    
    return (
        <div class="card">
            <h2>{dueDay + "/" + dueMonth + "/" + dueYear}</h2>
            <p>{id_pet ,"<---", descriptionProblem}</p>
        </div>
    )
}

export default DateCard
