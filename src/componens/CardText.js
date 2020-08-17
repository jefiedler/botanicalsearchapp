import React from 'react';

function CardText(nomalName, family, genus) {
    return (
        <div>
            <p className="card_body-text">{nomalName}</p>
    <p className="card_body-text">{family}</p>
    <p className="card_body-text">{genus}</p>
        </div>
    );
}

export default CardText;