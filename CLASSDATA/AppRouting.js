import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import CreateClass from './CreateClass'
import Details from './Details'

function AppRouting() {
  return (
    <>
    <nav>
        <NavLink to="/class">CREATE CLASS</NavLink>
        <NavLink to="/details">CLASS DETAILS</NavLink>
    </nav>
    <Routes>
        <Route path='/class' element={<CreateClass/>}></Route>
        <Route path='/details' element={<Details/>}></Route>
        <Route path='/editClass/:cid' element={<CreateClass/>}></Route>
    </Routes>
    </>
    
  )
}

export default AppRouting