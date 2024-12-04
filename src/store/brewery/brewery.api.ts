import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Ibrewery } from "../../interfaces/brewery.interface"

export const breweryAPI = createApi({
 reducerPath: "breweryAPI",
 baseQuery: fetchBaseQuery({baseUrl: 'https://api.openbrewerydb.org/v1/'}),
 endpoints: (builder) => ({
  fetchbrewies: builder.query<Ibrewery[], { per_page: number }>({
    query: ({ per_page }) => ({
      url: 'breweries',
      params: { per_page },
    }),
  }),
  fetchRandom: builder.query<Ibrewery[], { size: number }>({
    query: ({ size }) => ({
      url: `breweries/random`,
      params: { size },
    }),
  }),
  fetchBrewery: builder.query<Ibrewery, string >({
    query: ( id: string ) => ({
      url: `breweries/${id}`
    }),
  })
}),
})

export const {useFetchbrewiesQuery, useFetchBreweryQuery, usePrefetch, useFetchRandomQuery} = breweryAPI