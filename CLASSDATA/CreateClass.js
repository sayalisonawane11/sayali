import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function CreateClass() {
    const Nav=useNavigate()
    const{register, handleSubmit}=useForm()

    function addClass(classObj){
        axios.post("http://127.0.0.1:8085/posts", classObj)
        console.log(classObj)
        //Nav('/details')
        
    }
  return (
    <form onSubmit={handleSubmit(addClass)}>
        <h2>CLASS FORM</h2>
        <br></br>
        <input type="number" placeholder='CLASS ID' {...register("class_id")}/>
        <br></br>
        <input type="number" placeholder='SCHOOL ID' {...register("school_id")}/>
        <br></br>
        <input type="text" placeholder='STATUS' {...register("status")}/>
        <br></br>
        <input type="submit" value="ADD CLASS"/>
    </form>
  )
}

export default CreateClass