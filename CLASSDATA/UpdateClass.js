import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function UpdateClass() {
   const[register, setValue, handleSubmit]= useForm()
    const[class2, setClass2]=useState({})
   const{cid}= useParams()
   function getClassData1(){
    let classObj = axios.get(`http://127.0.0.1:8085/posts/${cid}/`)
    setClass2(classObj.data)

   }
   function UpdateClass(obj){
    axios.put(`http://127.0.0.1:8085/posts/${cid}/`, obj)
   }
  return (
    <>
    <form onSubmit={handleSubmit(UpdateClass)}>
        <h2>CLASS FORM</h2>
        <br></br>
        <input type="hidden" {...register("class_id")}/>
        <input type="number" placeholder='CLASS ID' {...register("class_id")} {...setValue("class_id", classObj.class_id)}/>
        <br></br>
        <input type="number" placeholder='SCHOOL ID' {...register("school_id")} {...setValue("school_id", classObj.school_id)}/>
        <br></br>
        <input type="text" placeholder='STATUS' {...register("status")} {...setValue("status", classObj.status)}/>
        <br></br>
        <input type="submit" value="UPDATE CLASS"/>
    </form>
    </>
  )
}

export default UpdateClass