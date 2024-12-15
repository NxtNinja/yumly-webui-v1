import Link from "next/link";

const RecipeCard = () => {
  return (
    <>
      <Link href="/">
        <div className="relative my-6 flex w-full flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="relative m-2.5 h-56 overflow-hidden rounded-md text-white">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="card-image"
            />
          </div>
          <div className="p-4">
            <div className="mb-4 w-20 rounded-full border border-transparent bg-cyan-600 px-2.5 py-0.5 text-center text-xs text-white shadow-sm transition-all">
              POPULAR
            </div>
            <h6 className="mb-2 text-xl font-semibold text-slate-800">
              Website Review Check
            </h6>
            <p className="font-light leading-normal text-slate-600">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </p>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <img
                alt="Tania Andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-8 w-8 rounded-full"
              />
              <div className="ml-3 flex flex-col text-sm">
                <span className="font-semibold text-slate-800">
                  Lewis Daniel
                </span>
                <span className="text-slate-600">January 10, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;
