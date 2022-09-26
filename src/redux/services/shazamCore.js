import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '7340994c0amsh3735e0ca9e9180bp150245jsndb32e9acbc96');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi
