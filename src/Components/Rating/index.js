import React from 'react';
import './styles.css';

export const Rating = ({ size = 1, vote_average }) => (
    <div className="movie__rating" style={{ fontSize: `${size}rem` }}>
        <span className="icon-star"></span>
        <span className={vote_average >= 2 ? "icon-star" : "icon-star-empty"}></span>
        <span className={vote_average >= 4 ? "icon-star" : "icon-star-empty"}></span>
        <span className={vote_average >= 6 ? "icon-star" : "icon-star-empty"}></span>
        <span className={vote_average >= 8 ? "icon-star" : "icon-star-empty"}></span>({vote_average})
    </div>
)

export default Rating;