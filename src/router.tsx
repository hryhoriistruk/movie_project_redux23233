import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayOut} from "./layouts";
import {GenresPage, MovieInfoPage, MoviesPage, SearchPage} from "./pages";
import {GenreIdPage} from "./pages/GenreIdPage";
import {SearchKeyWordPage} from "./pages/SearchKeyWordPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element: <MovieInfoPage/>},
            {path: 'genres', element: <GenresPage/>, children:[
                    {path:':idGenres', element:<GenreIdPage/>}
                ]},
            {path: 'search', element: <SearchPage/>, children:[
                    {path:':searchWord', element:<SearchKeyWordPage/>}
                ]}
        ]
    }
])

export {router}