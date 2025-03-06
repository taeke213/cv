import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './styles/index.css'
import {Education} from './components/education.jsx'
import { Experience} from './components/experience.jsx'
import { Resume } from './components/resume.jsx'
import { General } from './components/general.jsx'

function Input(){
  let starti = Math.round(new Date)
  let o = {}
  o[starti] = {
      company:"",
      position:"",
      dateofwork:""
      }
  const [experiencedata, setExperienceData] = useState(o)
  let starte = Math.round(new Date)
  let e = {}
  e[starte] = {
      schoolname:"",
      titleofstudy:"",
      dateofstudy:""
      }
  const [educationdata, setEducationdata] = useState(e)
  const [data,setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phonenumber:"",
})
  return(
    <>
    <div className='forms'>
      <General data={data} setData={setData}/>
      <Education educationdata={educationdata} setEducationdata={setEducationdata}/>
      <Experience experiencedata={experiencedata} setExperienceData={setExperienceData}/>
    </div>
    <div className='result'>
      <Resume experiencedata={experiencedata} educationdata={educationdata} generaldata={data}/>
    </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input/>
  </StrictMode>,
)
