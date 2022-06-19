import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const runsAdapter = createEntityAdapter()

const initialState = runsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCastIrons: builder.query({
            query: () => '/api/v1/runs/all-runs',
            transformResponse: responseData => {
                const loadedCastIrons = responseData.results.map(castIron => {
                    return castIron;
                });
                return runsAdapter.setAll(initialState, loadedCastIrons)
            },
            providesTags: (result, error, arg) => [
                { type: 'Cast Iron', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Cast Iron', id }))
            ]
        }),
        getCastIronById: builder.query({
            query: runId => `/api/v1/runs/${runId}`,
            transformResponse: responseData => {
                const loadedRuns = responseData.map(run => {
                    return run;
                });
                return runsAdapter.setAll(initialState, loadedRuns)
            },
            providesTags: (result, error, arg) => [
                ...result.ids.map(id => ({ type: 'Run', id }))
            ]
        }),
    })
})

export const {
    useGetRunsQuery,
    useGetRunsByIdQuery
} = extendedApiSlice

// returns the query result object
export const selectRunsResult = extendedApiSlice.endpoints.getRuns.select()

// Creates memoized selector
const selectRunsData = createSelector(
    selectRunsResult,
    runsResult => runsResult.data, // normalized state object with ids & entities
)
//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllRuns,
    selectById: selectRunsById
    // Pass in a selector that returns the posts slice of state
} = runsAdapter.getSelectors(state => selectRunsData(state) ?? initialState)