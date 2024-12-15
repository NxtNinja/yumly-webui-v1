import RecipeCard from "../Home/RecipeCard";

const Profile = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center justify-center gap-1">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-[110px] w-[110px] !rounded-full object-cover object-center"
        />
        <p className="text-2xl uppercase">Priyangsu Banik</p>
        <p className="">priyangsubanik2003@gmail.com</p>
      </div>
      <div className="">
        <p className="text-4xl font-bold">My Recipes</p>
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
      </div>
    </div>
  );
};

export default Profile;
