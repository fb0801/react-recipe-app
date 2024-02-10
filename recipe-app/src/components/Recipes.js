import React, { Component } from 'react';



const Recipes = props => (
    <div className='container'>
      <div className='row'>
      {props.recipes.map((recipe) => {
            return (
             <div className="col-md-4">
              <div className='recipe__box'> 
              <img className="recipe__box-img" src={rec.img_url} alt={recipe.title} />
              
              </div>
             </div>

            )
        } ) }
      </div>
             
    </div>
)
export default Recipes