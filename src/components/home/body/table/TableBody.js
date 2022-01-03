import React, {useState, useEffect} from 'react';
import TableBodyElement from './TableBodyElement';

function TableBody() {
    const [ownersList, setOwnersList] = useState([]);
    let dataOwners = [];
    useEffect(()=>{
        
        const requestFunc = async () => {
            const request = await fetch('http://localhost:8080/');
            const data = await request.json();
            
            data.forEach(element => dataOwners.push(element));
            setOwnersList(dataOwners);
            
        }
        requestFunc();

    },[]);
    useEffect(()=>{
       console.log(ownersList);
    },[ownersList])
    return (
        <tbody>
            {ownersList?.map((value, index) => <TableBodyElement id_owner = {index+1} first_name = {value.first_name} last_name = {value.last_name} phoneNumber = {value.phoneNumber} email = {value.email}></TableBodyElement>)}
        </tbody>
    )
}

export default TableBody
