import React from 'react';
import './styles.css';

export default function RatingFilter({ rating, setRating }) {

    const handleRating = (e) => {
        setRating(rating !== e.target.value ? e.target.value : false);
    }

    return (
        <div className="card-rating card horizontal">
            <div className="input-field col s12" >
                <div className="rating">
                    <input type="radio" id="star5" name="rating" checked={rating === "5"} onClick={(e) => { handleRating(e) }} onChange={() => { }} value="5" /><label htmlFor="star5" title="Score 8 - 10"></label>
                    <input type="radio" id="star4" name="rating" checked={rating === "4"} onClick={(e) => { handleRating(e) }} onChange={() => { }} value="4" /><label htmlFor="star4" title="Score 6 - 8"></label>
                    <input type="radio" id="star3" name="rating" checked={rating === "3"} onClick={(e) => { handleRating(e) }} onChange={() => { }} value="3" /><label htmlFor="star3" title="Score 4 - 6"></label>
                    <input type="radio" id="star2" name="rating" checked={rating === "2"} onClick={(e) => { handleRating(e) }} onChange={() => { }} value="2" /><label htmlFor="star2" title="Score 2 - 4"></label>
                    <input type="radio" id="star1" name="rating" checked={rating === "1"} onClick={(e) => { handleRating(e) }} onChange={() => { }} value="1" /><label htmlFor="star1" title="Score 0 - 2"></label>
                </div>
                <label htmlFor="first_name" className="card-rating__label active">Filter Rating</label>
            </div>
        </div>
    )
}