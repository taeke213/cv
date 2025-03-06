import { useState } from "react"
import React from "react"
import ReactDOMServer, { renderToString } from 'react-dom/server';
import { createRoot } from 'react-dom/client'

export function Education({educationdata,setEducationdata}){

function getnewindex(){
    console.log(Math.round(new Date))
    return Math.round( new Date )
}

function newData(e){
    let goal = e.target.id
    let key = e.target.parentNode.id
    console.log(e.target.parentNode.id)
    
            let data = educationdata[key]
            data[goal] = e.target.value
            setEducationdata({...educationdata,[key] : data})
        console.log(educationdata)
}
function deleteinput(e){
    delete educationdata[e.target.parentNode.id]
    setEducationdata({...educationdata})
}

return (
    <>
    <div>
            <h1>education</h1>
            <div id="educationdiv">
                <div id="educationforms">

                {Object.entries(educationdata).map((x) => (
                        <div id={x[0]}>
                            <div id={x[0]} className="form">
                                <div id={x[0]}>
                                    <label htmlFor="schoolname">Schoolname</label>
                                    <input type="text" id="schoolname" placeholder="university of placename" onChange={newData} />
                                </div >
                                <div id={x[0]}>    
                                    <label htmlFor="titleofstudy" >title of study</label>
                                    <input type="text" id="titleofstudy" placeholder="engineering" onChange={newData} />
                                </div>
                                <div id={x[0]}>
                                    <label htmlFor="dateofstudy">date of study</label>
                                    <input type="text" id="dateofstudy" placeholder="2020-2024" onChange={newData} />
                                </div>
                                <button onClick={deleteinput}>delete</button>
                            </div>

                        </div>
            ))}
                </div>
                <button onClick={() => {
                    let i = getnewindex()
                    let data = {schoolname:"",
                        titleofstudy:"",
                        dateofstudy:""
                        }
        setEducationdata({...educationdata,[i] : data})
    }}>new</button>
            </div>
        </div>
        </>

)
}
