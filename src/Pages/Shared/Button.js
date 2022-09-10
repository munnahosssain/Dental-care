import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className="btn-grad btn-grad:hover">{children}</button>
        </div>
    );
};

export default Button;