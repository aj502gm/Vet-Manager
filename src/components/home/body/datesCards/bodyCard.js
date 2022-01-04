import React, {useEffect, useState} from 'react'
import DateCard  from './index'
function BodyCard() {
    const [pendingDatesList, setPendingDatesList] = useState([]);
    let datesList = [];

    useEffect(()=>{
        const requestFunc = async () => {
            const request = await fetch('http://localhost:8080/');
            const data = await request.json();
            
            data[1].forEach(element => datesList.push(element));
            
            setPendingDatesList(datesList);
            
        }
        requestFunc();
    }, [])
    return (
        <div className = "row">
            {pendingDatesList?.map(value => <DateCard id_appointment = {value.id_appointment} id_pet = {value.id_pet} dueDay = {value.dueDay} dueMonth = {value.dueMonth} dueYear = {value.dueYear} availability = {value.availability} descriptionProblem = {value.descriptionProblem}></DateCard>)}
        </div>
    )
}

export default BodyCard
