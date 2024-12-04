import React, { useState } from 'react';
import { useFetchbrewiesQuery, useFetchRandomQuery, usePrefetch } from '../store/brewery/brewery.api';
import BreweryCard from '../components/breweryCard';

const BreweriesPage: React.FC = () => {
  const [per_page, set_perPage] = useState(5);
  const [randomCount, setRandomCount] = useState(0);

  const { data, isLoading } = useFetchbrewiesQuery({ per_page });
  const prefetch = usePrefetch("fetchBrewery");

  const { data: randomBreweries } = useFetchRandomQuery(
    { size: randomCount }, 
    { skip: randomCount <= 0 }
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>breweries</h1>

      <div>
        <label>
          Number of Random Breweries:
          <select
            value={randomCount}
            onChange={(e) => setRandomCount(Number(e.target.value))}
          >
            <option value={0}>0</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>

        {randomCount > 0 && randomBreweries && (
          <div className="brewery-container">
            {randomBreweries.map((brewery) => (
              <button onMouseEnter={() => prefetch(brewery.id, { ifOlderThan: 60 })}>
                <BreweryCard key={brewery.id} brewery={brewery} />
              </button>
            ))}
          </div>
        )}
      </div>

      <label>
        Number of Breweries:
        <select value={per_page} onChange={(e) => set_perPage(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={40}>40</option>
        </select>
      </label>
      <div className="brewery-container">
        {data?.map((brewery) => (
          <button onMouseEnter={() => prefetch(brewery.id, { ifOlderThan: 60 })}>
            <BreweryCard key={brewery.id} brewery={brewery} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BreweriesPage;
