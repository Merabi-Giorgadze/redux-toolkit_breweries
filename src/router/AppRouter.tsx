import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BreweriesPage from '../pages/breweriesPage'
import BreweryPage from '../pages/breweryPage'
import HomePage from '../pages/HomePage'

const AppRouter:React.FC = () => {
  return (
    <Routes>
     <Route path='/breweries'>
      <Route index element={<BreweriesPage/>}/>
      <Route path=':id' element={<BreweryPage/>}/>
     </Route>
     <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default AppRouter