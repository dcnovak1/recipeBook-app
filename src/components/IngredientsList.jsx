import { useState } from 'react';

export default function IngredientsList({
  myIngredients,
  onChangeIngredient,
  onDeleteIngredient
}) {
  return (
    <ul>
      {myIngredients.map((ingredient, index) => (
        <li className='ingredients-list' key={index}>
          <Item
            ingredient={ingredient}
            onChange={onChangeIngredient}
            onDelete={onDeleteIngredient}
          />
        </li>
      ))}
    </ul>
  );
}

function Item({ingredient, onChange, onDelete }) {
  let ingredientContent;
    ingredientContent = (
      <>
        <label className='ingredient-label'>Quantity: </label>
        <input  className="ingredient-list-quantity"
          value={ingredient.quantity}
          onChange={e => {onChange({...ingredient,quantity: e.target.value});}} 
        />
        <label className='ingredient-label'>Unit: </label>
        <input className="ingredient-list-unit"
          value={ingredient.unit}
          onChange={e => {onChange({...ingredient,unit: e.target.value});}} 
        />
        <label className='ingredient-label'>Name: </label>
        <input className="ingredient-list-ingredient"
          value={ingredient.ingredient}
          onChange={e => {onChange({...ingredient,ingredient: e.target.value});}} 
        />
      </>
    );
  return (
    <label>
      {ingredientContent}
      <button className='button-remove' onClick={() => onDelete(ingredient.ordinalPosition)}>
        x
      </button>
    </label>
  );
}
