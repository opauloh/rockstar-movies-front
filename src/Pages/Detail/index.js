import React, { useState, useEffect } from 'react';
import Container from '../../Components/Container';
import ProgressBar from '../../Components/ProgressBar';
import Axios from 'axios';
import Rating from '../../Components/Rating';
import { DateHelper } from '../../Helpers/DateHelper';
import './styles.css';
import Message from '../../Components/Message';

export default function Detail({ match }) {
    const [isLoading, setIsLoading] = useState(true);
    const [searchMessage, setSearchMessage] = useState(true);
    const [movie, setMovie] = useState(false);

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(result => {
                setMovie(result.data);
                setIsLoading(false);
            }).catch(result => {
                setMovie(false);
                setSearchMessage("There was an unexpector error while searching for this movie")
                setIsLoading(false);
            });
    }, [match]);

    return (
        <Container>
            <div className="section">
                <div className="row">
                    <ProgressBar
                        show={isLoading}
                        setIsLoading={setIsLoading}
                    />
                    <Message message={searchMessage} />
                    {
                        movie ?
                            <div className="col s12">
                                <div className="detail-movie card horizontal">
                                    <div className="card-image">
                                        <img
                                            style={{ width: 400 }}
                                            alt={movie.original_title}
                                            src={movie.poster_path ?
                                                `https://image.tmdb.org/t/p/w400/${movie.poster_path}` :
                                                'https://www.jmiproperties.com/assets/img/no_image.png'}
                                        />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <h4>{movie.original_title} ({DateHelper.yearFromDateText(movie.release_date)})</h4>
                                            <div className="movie__score">
                                                <Rating size={1.5} vote_average={movie.vote_average} />
                                                <div className="movie__genres">
                                                    {
                                                        movie.genres.map(genre => (
                                                            <span key={genre.id} className="new badge blue">{genre.name}</span>
                                                        ))
                                                    }
                                                </div>

                                            </div>

                                            <h5 className="movie__title">Overview</h5>
                                            <p>{movie.overview}</p>
                                            <h5>Release Date</h5>
                                            <p>{movie.release_date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : <></>
                    }
                </div>
            </div>
        </Container>
    )
}