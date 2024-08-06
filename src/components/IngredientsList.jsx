

export default function IngredientsList({
  myIngredients,
  onChangeIngredient,
  onDeleteIngredient
}) {
  return (
    <ul style={{marginBottom:'6px'}}>
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
        <input  style={{width:'60px', textAlign:'right'}}
          value={ingredient.quantity}
          onChange={e => {if(!isNaN(e.target.value)){onChange({...ingredient,quantity: Number(e.target.value)});}}} 
        />
        <input style={{width:"80px", marginLeft:'40px'}}
          value={ingredient.unit}
          onChange={e => {onChange({...ingredient,unit: e.target.value});}} 
        />
        <input style={{width:"120px", marginLeft:'10px'}}
          value={ingredient.ingredient}
          onChange={e => {onChange({...ingredient,ingredient: e.target.value});}} 
        />
      </>
    );
  return (
    <label>
      {ingredientContent}
      <button className='btn btn-danger btn-sm' style={{marginLeft:'5px'}} onClick={() => onDelete(ingredient.ordinalPosition)}>
        x
      </button>
    </label>
  );
}
