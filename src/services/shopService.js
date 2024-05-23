import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../databases/realtimeDatabase"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['profileImageGet', 'locationGet', 'getOrders'],
    endpoints: (builder) => ({
        getGenres: builder.query({
            query: () => `genre.json`,
        }),
        getMoviesByCategory: builder.query({
            query: () => `movies.json`,
            transformResponse: (response, meta, arg) => {
                const responseTransformed = Object.values(response);
                const filteredMovies = responseTransformed.filter(movie => movie.genre.includes(arg));                
                return filteredMovies;
            },            
        }),
        getMoviesByCategoryLimit10: builder.query({
            query: () => `movies.json`,
            transformResponse: (response, meta, arg) => {
                const responseTransformed = Object.values(response);     
                const filteredMovies = responseTransformed.filter(movie => movie.genre.includes(arg));                                                           
                return filteredMovies.slice(0, 10);
            },
        }),
        getMoviesById: builder.query({
            query: (movieId) =>
                `movies.json?orderBy="rank"&equalTo=${movieId}`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)                
                if (responseTransformed.length) return responseTransformed[0]
                return null
            },
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['getOrders']
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']
        }),        
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
            invalidatesTags: ['profileImageGet']            
        }),
        getLocation: builder.query({
            query: (localId) => `locations/${localId}.json`,
            providesTags: ['locationGet']
        }),
        postLocation: builder.mutation({
            query: ({location, localId}) => ({
                url: `locations/${localId}.json`,
                method: "PUT",
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                    updatedAt: location.updatedAt
                },
            }),
            invalidatesTags: ['locationGet'] //Invalidates will trigger a refetch on profileImageGet
        }),
        getOrders: builder.query({
            query: () => `orders.json`,
            providesTags: ['getOrders']
        }),                        
    }),
})

export const {    
    useGetGenresQuery,
    useGetMoviesByIdQuery,
    useGetMoviesByCategoryQuery,
    useGetMoviesByCategoryLimit10Query,
    usePostOrderMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useGetLocationQuery,
    usePostLocationMutation,
    useGetOrdersQuery    
} = shopApi
