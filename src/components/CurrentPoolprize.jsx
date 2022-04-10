import React from 'react';
import "./ComponentStyle.css"

function CurrentPoolprize(props) {
    const classes = {
        main:{
            borderRadius:"30px",
            width:"100%",
            height:"100%",
            border:"9px solid black",
            display:"flex",
            flexDirection:"column",
        },
        top:{
            backgroundColor:"#fbe64d",
            flexBasis:"50%",
            borderTopLeftRadius:"25px",
            borderTopRightRadius:"25px",
            borderBottom:"5px solid black"
        },
        bottom:{
            backgroundColor:"#2c2a32",
            flexBasis:"50%",
            display:"flex",
            borderBottomLeftRadius:"25px",
            borderBottomRightRadius:"25px"
        },
        poolHeading:{
            color:"white"
        },
        poolPoint:{
            color:"#fbe64d",
            textShadow:"2px #000",
            fontSize:"80px",
            width:"70%",
            height:"100%",
            margin:"0% 0% 0% 5%"
        },
        poolUnit:{
            color:"#fbe64d",
            fontSize:"25px",
            width:"20%",
            marginTop:"15%"
        }
    };
    return (
        <div className='Container' style={classes.main}>
            <div style={classes.top}>
                <h1 className='poolHeading' style={classes.poolHeading}>CURRENT PRIZE POOL</h1>
                <h4 style={classes.poolSubHeading}>The pool will increase for every transaction mode</h4>
            </div>
            <div style={classes.bottom}>
                <h1 className='poolPoint' style={classes.poolPoint}>100,000</h1>
                <h3 style={classes.poolUnit}>UNIT</h3>
            </div>
        </div>
    );
}

export default CurrentPoolprize;