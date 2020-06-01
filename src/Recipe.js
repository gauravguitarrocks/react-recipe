import React from 'react';
import css from './recipe.module.css';


const Recipe = ({title,calories,image}) =>{
    return(
        <div className={css.recipe}>
            <h1 className={css.title}>{title}</h1>
            <p>Calories:{calories}</p>
            <img src={image} alt="" className={css.image}></img>
        </div>
    );
}

export default Recipe;