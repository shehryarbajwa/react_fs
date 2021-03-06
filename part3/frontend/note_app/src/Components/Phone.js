import React from 'react';

const label = 'Delete contact'
const Phone = ({ name, number, handleDelete }) => {
    return (
        <li className="phone">{name} no: {number} <button onClick={handleDelete}>{label}</button></li>
    )
}

export default Phone;