import { useState } from "react"

export function General({data,setData}){
    function update(e){
        let key = e.target.id
        let value = e.target.value
        data[key] = value
        setData({...data,[key]: value})
        setTimeout(console.log(data),3000)
    }
    return(
        <div>
            <h1>general information</h1>
            <div className="form" id="general">
            <div>
                <label htmlFor="firstname">firstname</label>
                <input type="text" id="firstname" onChange={update} placeholder="josh"/>
            </div>
            <div>
                <label htmlFor="lastname">lastname</label>
                <input type="text" id="lastname" onChange={update} placeholder="smith"/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" id="email" onChange={update} placeholder="example@gmail.com" />
            </div>
            <div>
                <label htmlFor="phonenumber">phonenumber</label>
                <input type="tel" id="phonenumber" onChange={update} placeholder="+31 6 123456"/>
            </div>
            </div>
        </div>
    )
}