import RecipeCard from "@/components/Home/RecipeCard";

const DisplayBookmarks = () => {
  return (
    <>
      <p className="text-4xl font-bold">Bookmarked</p>
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

export default DisplayBookmarks;
