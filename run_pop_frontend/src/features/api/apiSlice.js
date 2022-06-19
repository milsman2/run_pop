import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://runpopfastapi.kanebroslab.com' }),
    tagTypes: ['Run'],
    endpoints: builder => ({})
})