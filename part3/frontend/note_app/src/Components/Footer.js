import React from 'react';


const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16,
        textAlign: 'center',
        margin: 20
    }

    return (
        <div style={footerStyle}>
            <br />
            <em>Note app, Shehryar Bajwa 2019</em>
        </div>
    )
}

export default Footer;