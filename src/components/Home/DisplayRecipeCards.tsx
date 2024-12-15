import RecipeCard from "./RecipeCard";

const DisplayRecipeCards = () => {
  return (
    <>
      <p className="text-4xl font-bold">Latest Recipes</p>
      <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-3 lg:grid-cols-4">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </>
  );
};

export default DisplayRecipeCards;
