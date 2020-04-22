import React from 'react';

export const ProgressBar = ({ show }) => (
    show ?
        <div className="col s12">
            <div className="progress blue">
                <div className="indeterminate light-blue lighten-3"></div>
            </div>
        </div>
        : <></>
);

export default ProgressBar;