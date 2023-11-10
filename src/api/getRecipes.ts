/**
 * used to get a list of recipes based on a set of conditions passed to the function
 */
export const fetchRecipes = (allergens: Array<string>) => {

    return new Promise(function (resolve, reject) {

        //get raw json from api supplied - https://www.simplycook.com/api/recipes
        fetch('https://www.simplycook.com/api/recipes').then(async (response) => {
            const recipes = await response.json();

            //filter the raw response for the acceptable allergan passed as an array in the function parameter
            const filteredRecipes = recipes.filter((r: any) => r.allergens.some((r: any) => allergens.includes(r)));

            //return the requested data to the parent function to process the data on the UI
            resolve(filteredRecipes)

        }).catch((error) => console.log(error))

    });

}