import React from 'react'
import { Ibrewery } from "../interfaces/brewery.interface";
import { useNavigate } from 'react-router-dom';

interface randomCardProps {
 brewery: Ibrewery
}
const randomCard:React.FC<randomCardProps> = ({brewery: { name, country, city, address_1, phone, postal_code}}) => {
 const navigate = useNavigate()
 return (
  <div className='brewery-card' onClick={() => navigate(`/breweries/random`)}>
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

export default randomCard