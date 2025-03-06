import { useState } from "react"
import React from "react"
export function Experience({experiencedata,setExperienceData}){

function getnewindex(){
    console.log(Math.round(new Date))
    return Math.round( new Date )
}

function newData(e){
    let goal = e.target.id
    let key = e.target.parentNode.id
    console.log(e.target.parentNode.id)
    
            let data = experiencedata[key]
            data[goal] = e.target.value
            setExperienceData({...experiencedata,[key] : data})
        console.log(experiencedata)
}
function deleteinput(e){
    delete experiencedata[e.target.parentNode.id]
    setExperienceData({...experiencedata})
}
return (
    <>
    <div>
            <h1>experience</h1>
            <div id="experience">
                <div id="experienceforms">

                {Object.entries(experiencedata).map((x) => (
                        <div id={x[0]}>
                            <div id={x[0]} className="form">
                                <div id={x[0]} className="p1">
                                    <label htmlFor="company">Company</label>
                                    <input type="text" id="company" placeholder="Google" onChange={newData} />
                                </div>
                                <div id={x[0]} className="p2">
                                    <label htmlFor="position" >position</label>
                                    <input type="text" id="position" placeholder="manager" onChange={newData} />
                                </div>
                                <div id={x[0]} className="p3">
                                    <label htmlFor="dateofwork">date of work</label>
                                    <input type="text" id="dateofwork" placeholder="2020-2024" onChange={newData} />
                                </div>
                                <button onClick={deleteinput}>delete</button>
                            </div>
                        </div>
            ))}
                </div>
                <button onClick={() => {
                    let i = getnewindex()
                    let data = {company:"",
                        poition:"",
                        dateofwork:""
                        }
        setExperienceData({...experiencedata,[i] : data})
    }}>new</button>
            </div>
        </div>
        </>

)
}