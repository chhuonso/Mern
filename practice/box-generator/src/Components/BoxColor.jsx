import React, { useState } from 'react';
    
    
const BoxColor = (props) => {

    // this component state variables
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState(["red", "blue", "purple"]);



    // function to submit (e) is event Object 
    const createBox = (e) => {
        e.preventDefault(); // prevent the browser behavior 
        setBoxes([...boxes, color]);
        setColor("");
        console.log("Submitted " + color);
    }



//__________________________________________________________________________
    return (
        <>
        <div style={
            {
                display:'flex', 
                justifyContent:"center", 
                alignItems:"center", 
                margin:20
            }}>
            <form  onSubmit={createBox}>
                <label htmlFor="colorBox">Color</label>
                <input type="text" name="colorBox" value={ color } onChange={ (e) => setColor(e.target.value) }/>
                <button>Add</button>
            </form>
        </div> 
        <div style={
            {
                display:"flex", 
                flexWrap:"wrap", 
                justifyContent:"center", 
                alignItems:"center", 
                textAlign:"center"
            }}>
                {boxes.map( (color, index) => <div key={ index } style={
                    {
                        width:100, 
                        height:100, 
                        backgroundColor: color, 
                        margin:10, 
                        color:'yellowgreen',
                        display:"flex",
                        justifyContent:"center", 
                        alignItems:"center" 
                    }}>
                            { color } <br />index:{index}</div>)}
        </div>
        </>
    );
};
    
export default BoxColor;

