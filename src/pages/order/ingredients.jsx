const Cheese = () => <div className="bg-yellow-400 h-4 w-56 flex justify-center text-xs rounded-full">Cheese</div>;
const Tomato = () => <div className="bg-red-400 h-4 w-56 flex justify-center text-xs rounded-full">Tomato</div>;
const Lettuce = () => <div className="bg-green-400 h-4 w-56 flex justify-center text-xs rounded-full">Lettuce</div>;
const Meat = () => <div className="bg-red-800 h-4 w-56 flex justify-center text-xs rounded-full">Meat</div>;
const Mayo = () => <div className="bg-yellow-100 h-4 w-56 flex justify-center text-xs rounded-full">Mayo</div>;
const Sauce = () => <div className="bg-red-600 h-4 w-56 flex justify-center text-xs rounded-full">Sauce</div>;
const Pickles = () => (
  <div className="flex gap-1 w-56">
    <div className="bg-green-500 h-4 w-56 flex justify-center text-xs rounded-full">Pickles</div>
    <div className="bg-green-500 h-4 w-56 flex justify-center text-xs rounded-full">Pickles</div>
    <div className="bg-green-500 h-4 w-56 flex justify-center text-xs rounded-full">Pickles</div>
  </div>
);
export const BreadTop = () => <div className="bg-orange-300 h-10 w-64 rounded-tl-full rounded-tr-full" />;
export const BreadBottom = () => <div className="bg-orange-300 h-10 w-64 rounded-bl-full rounded-br-full" />;

export const Ingredient = ({ type, onClickX }) => (
  <div className="relative">
    <div onClick={onClickX} className="absolute -top-1 -right-2 text-[8px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white cursor-pointer opacity-0 hover:opacity-100">
      X
    </div>
    {type === "cheese" && <Cheese />}
    {type === "meat" && <Meat />}
    {type === "lettuce" && <Lettuce />}
    {type === "tomato" && <Tomato />}
    {type === "pickles" && <Pickles />}
    {type === "mayo" && <Mayo />}
    {type === "sauce" && <Sauce />}
  </div>
);
