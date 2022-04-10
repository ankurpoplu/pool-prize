import React from 'react';

function ProgressLevel({img,num}) {
    const box={
        display:"flex",
        flexDirection:"column",
        
    }
    const texted={
        color:"white",
        backgroundColor:"#615e5d",
        borderRadius:"15px",
        width:"100%",
        padding:"5px",
        fontSize:"15px"
    }
    const images={
        width:"100%",
        backgroundColor:"#2e2c36",
        border:"1px dashed black",
        borderRadius:"5px",
    }
    return (
        <div style={box}>
            <h2 style={texted}>{num}</h2>
            <img style={images} src={img} alt={""} />
        </div>
    );
}

export default ProgressLevel;