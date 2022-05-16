function RecipeView({recipe, deleteRepcipe}) {
    
    return (
        <>
            <tr>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine.length > 0 ? recipe.cuisine : "N/A"}</td>
                <td>{recipe.photo.length > 0 ? <img src={recipe.photo} alt={recipe.name}/> : "N/A"}</td>
                <td className="content_td"><p>{(recipe.ingredients)}</p></td>
                <td className="content_td"><p>{(recipe.preparation)}</p></td>
                <td><button name="delete" onClick={deleteRepcipe}>
                    Delete
                </button></td>
            </tr>
        </>
    )

}

export default RecipeView;