import React, { useState } from "react";

function RecipeCreate ({createRecipe}) {
  const iRecipeData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [content, setContent] = useState({ ...iRecipeData })

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handlerChangle = ({ target }) => {
    setContent({
      ...content,
      [target.name]: target.value,
    });
  };
  
  const handlerSubmit = event => {
    event.preventDefault();
    console.log("test data", content);
    createRecipe(content);
    setContent({ ...iRecipeData });
  };
  
  return (
    <form name="create" onSubmit={handlerSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  required={true}   
                  onChange={handlerChangle}
                  value={content.name}
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handlerChangle}
                  value={content.cuisine}     
                  placeholder="From"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo" 
                  onChange={handlerChangle}
                  value={content.photo} 
                  placeholder="Http"            
                />
              </label>
            </td>
            <td>
              <label>
                <textarea  id="ingredients" name="ingredients" required={true} 
                  onChange={handlerChangle}   value={content.ingredients} 
                  placeholder="exp: egg, salt"/>
              </label>           
            </td>
            <td>
              <label>
                <textarea id="preparation" name="preparation"  required={true} 
                 onChange={handlerChangle}  value={content.preparation} 
                 placeholder="exp: chop, mix"/>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
