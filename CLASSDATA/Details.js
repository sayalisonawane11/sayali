import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

function Details() {
    const{cid}=useParams()
   const[class1, setClass1]= useState([])
    useEffect(()=>{
        getClassData()
    }, [])
    async function getClassData(){
        let class1 =await axios.get("http://127.0.0.1:8085/posts/")
        setClass1(class1.data)
    }
    function deleteData(cid){
        axios.delete(`http://127.0.0.1:8085/posts/${cid}/`)
    }
  return (
    <>
    <h2>DETAILS OF CLASS</h2>
    <table border={"3px"}>
        <thead>
            <tr>
                <th>CLASS ID</th>
                <th>SCHOOL ID</th>
                <th>STATUS</th>
                <th>UPDATE</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
            {
                class1.map(c=>{
                    return(
                        <tr key={c.class_id}>
                            <td>{c.class_id}</td>
                            <td>{c.school_id}</td>
                            <td>{c.status}</td>
                            <td>
                                <NavLink to={`/editClass/${c.class_id}`}>
                                <button>UPDATE</button>
                                </NavLink>
                            </td>
                            <td>
                                <button onClick={deleteData(c.class_id)}>DELETE</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default Details