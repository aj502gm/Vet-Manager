import React from 'react'

function TableBodyElement({id_owner,first_name,last_name, phoneNumber, email}) {
    return (
        <tr>
            <td className="column1">{id_owner}</td>
            <td className="column2">{first_name + last_name}</td>
            <td className="column3">{phoneNumber}</td>
            <td className="column4">{email}</td>
            <td className="column5">
                   
                <input type = "button" value = "Delete" className = "btn btn-table" ></input>
                <input type = "button" value = "Delete" className = "btn btn-table btn-modify" ></input>
            </td>
        </tr>
    )
}

export default TableBodyElement;

/*
    PROPS PENDIENTES PARA MAYOR DINAMISMO
*/ 
