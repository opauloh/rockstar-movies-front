import React, { useEffect, useState } from 'react';
import Container from '../../Components/Container';
import Axios from 'axios';
import Search from '../../Components/Search';
import RatingFilter from '../../Components/RatingFilter';
import ProgressBar from '../../Components/ProgressBar';
import Message from '../../Components/Message';
import MovieCard from '../../Components/MovieCard';

export default function Home() {

    const [movies, setMovies] = useState([]);
    const [searchMessage, setSearchMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(false);
    const STAR_RATING = {
        1: { from: 0, to: 2 },
        2: { from: 2, to: 4 },
        3: { from: 4, to: 6 },
        4: { from: 6, to: 8 },
        5: { from: 8, to: 10 }
    };

    const discoveryMovies = () => {
        Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(result => {
                setMovies(result.data.results);
                setIsLoading(false);
            })
            .catch(result => {
                setMovies([]);
                setSearchMessage("There was an unexpector error while searching for movies")
                setIsLoading(false);
            });
    }

    useEffect(() => {
        setIsLoading(true);
        if (search.length > 2) {
            Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
                .then(result => {
                    setSearchMessage(result.data.total_results === 0 ? "Sorry, there are no movies in our catalog that match your search :(" : "");
                    setMovies(result.data.results);
                    setIsLoading(false);
                }).catch(result => {
                    setMovies([]);
                    setSearchMessage("There was an unexpector error while searching for movies")
                    setIsLoading(false);
                });
        } else {
            setSearchMessage("");
            discoveryMovies();
        }
    }, [search]);

    return (
        <Container>
            <div className="section">
                <div className="row">
                    <h5 className="header col s12 light">Welcome to our brand new movies website, below are our suggested movies, based on popularity, or you can feel free to search in our movies database.</h5>
                </div>
            </div>
            <div className="section">
                <div className="row ">
                    <div className="col s12 l9 m7">
                        <Search
                            search={search}
                            setSearch={setSearch}
                        />
                    </div>
                    <div className="col s12 l3 m5">
                        <RatingFilter
                            rating={rating}
                            setRating={setRating}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h5 >{search.length > 2 ? `Displaying results for "${search}"` : "Discovery"}</h5>
                    </div>
                    <Message message={searchMessage} />
                    <ProgressBar show={isLoading} />
                    {
                        movies
                            .filter(movie => rating ? movie.vote_average >= STAR_RATING[rating].from && movie.vote_average < STAR_RATING[rating].to : true)
                            .map(movie => (
                                <div key={movie.id} className="col s12 m3">
                                    <MovieCard {...movie} />
                                </div>
                            ))
                    }

                </div>
            </div>
        </Container>
    );
};
