import React from 'react';
import './styles.css';

export default function Search({ search, setSearch }) {
    return (
        <div className="card-search card horizontal">
            <div className="input-field col s12">
                <input
                    placeholder="Search for a Movie Name (E.g: Alice)"
                    id="search"
                    name="search"
                    type="text"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <label htmlFor="search" className="card-search__label active">Search</label>
            </div>
        </div>
    )
}