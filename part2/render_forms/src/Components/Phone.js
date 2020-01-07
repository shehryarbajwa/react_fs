import React from 'react';

const label = 'Delete contact'
const Phone = ({ name, number, handleDelete }) => {
    return (
        <li>{name} no: {number} <button onClick={handleDelete}>{label}</button></li>
    )
}

export default Phone;