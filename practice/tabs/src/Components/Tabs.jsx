import React, {useState} from 'react'



const Tabs = () => {
    // state variables
    const [tabArray] = useState
    ([
        {"tabNum":'Tab 1', "content":'Tab 1 is displaying!'}, 
        {"tabNum":'Tab 2', "content":'Tab 2 is displaying!'}, 
        {"tabNum":'Tab 3', "content":'Tab 3 is displaying!'}
    ])
    
    const [tabView, setTabView] = useState(tabArray[0].content)
    
    // methods 
    const changeTab = (index) => {
        setTabView(tabArray[index].content)
        console.log(index);
    }
//__________________________________________________________________________
    return (
        <>
        <div style={{
            display:'flex', 
            justifyContent:"center", 
            alignItems:"center", 
            flexDirection:"column"}}>
            <div style={{
                display:'flex', 
                padding:10,
                gap:50}}>

                {tabArray.map((tabObj, index) => 
                <div key={index} style={{border:'2px solid black', padding:"10px 30px", }} onClick={()=>{changeTab(index)}}>
                    {tabObj.tabNum}
                </div>
                )}
            </div>
            <div 
                style={{
                        height:150, 
                        width:400, 
                        border:'2px solid black'
                        }}>
                <p>{tabView}</p>
            </div>
        </div>
        </>
    );
};
    
export default Tabs;

