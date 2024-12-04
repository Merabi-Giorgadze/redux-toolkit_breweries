import React from 'react'
import { useFetchBreweryQuery } from '../store/brewery/brewery.api'
import { Link, useParams } from 'react-router-dom'

const breweryPage:React.FC = () => {
  const {id} = useParams<{ id: string }>()
  const {data, isLoading } = useFetchBreweryQuery(String(id))
  if (!data) return <h1>No data found</h1>;

  const { name, country, state_province, city, website_url, phone } = data;

  if(isLoading) return <h1>loading...</h1>
  return (
    <>
      <Link to="/breweries">Go back to Breweries</Link>
      <div className='onlybrewery'>
        <h4>{name}</h4>
        <p>{country}</p>
        <p>{state_province}</p>
        <p>{city}</p>
        <p>{website_url}</p>
        <p>{phone}</p>
      </div>
    </>
  )
}

export default breweryPage