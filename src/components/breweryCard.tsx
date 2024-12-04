import React from 'react'
import { Ibrewery } from "../interfaces/brewery.interface";
import { useNavigate } from 'react-router-dom';

interface BreweryCardProps {
 brewery: Ibrewery
}
const BreweryCard:React.FC<BreweryCardProps> = ({brewery: {id, name, country, city, address_1, phone, postal_code}}) => {
 const navigate = useNavigate()
 return (
  <div className='brewery-card' onClick={() => navigate(`/breweries/${id}`)}>
  <div>
   <h1>{name}</h1>
  </div>
   <p>{country}</p>
   <p>{city}</p>
   <p>{address_1}</p>
   <p>{phone}</p>
   <p>{postal_code}</p>
 </div>
 )
}

export default BreweryCard