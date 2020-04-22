import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { DateHelper } from '../../Helpers/DateHelper';
import './styles.css';

export default function MovieCard({ id, original_title, poster_path, vote_average, release_date }) {
    return (
        <div className="movie-card card medium">
            <Link to={`/detail/${id}`}>
                <div className="card-image">
                    <img
                        alt={original_title}
                        src={poster_path ?
                            `https://image.tmdb.org/t/p/w300/${poster_path}` :
                            'https://www.jmiproperties.com/assets/img/no_image.png'}
                    />
                </div>
            </Link>
            <div className="card-content">
                <h6 className="movie-card__title">{original_title} ({DateHelper.yearFromDateText(release_date)})</h6>
                <Rating vote_average={vote_average} />
            </div>
        </div>
    )
}