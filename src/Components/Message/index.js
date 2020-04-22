import React from 'react';

export const Message = ({ message }) => (
    message ?
        <div className="col s12">
            {message}
        </div>
        : <></>
)

export default Message;