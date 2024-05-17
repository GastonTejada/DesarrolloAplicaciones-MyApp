import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../databases/realtimeDatabase"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['profileImageGet'],
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
            })
        }),
        // getProfileImage: builder.query({
        //     query: (localId) => `profileImages/${localId}.json`,
        //     providesTags: ['profileImageGet']
        // }),        
        // postProfileImage: builder.mutation({
        //     query: ({image, localId}) => ({
        //         url: `profileImages/${localId}.json`,
        //         method: "PUT",
        //         body: {
        //             image: image
        //         },
        //     }),
        //     invalidatesTags: ['profileImageGet']
        // }),
    }),
})

export const {    
    useGetGenresQuery,
    useGetMoviesByIdQuery,
    useGetMoviesByCategoryQuery,
    usePostOrderMutation,
    // useGetProfileImageQuery,
    // usePostProfileImageMutation,    
} = shopApi
