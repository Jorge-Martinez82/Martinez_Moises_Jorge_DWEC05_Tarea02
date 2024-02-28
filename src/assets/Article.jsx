import React from 'react';

const Article = (props) => {
    return (
        <div>
            <article className={props.clase}>
                <img src={props.image} alt={props.name}/>
                <footer>
                    <div className="tour-info">
                        <h4>{props.name}</h4>
                        <h4 className="tour-price">{props.price}</h4>
                    </div>
                    <p>{props.info}</p>
                </footer>
            </article>
        </div>
    );
};

export default Article;