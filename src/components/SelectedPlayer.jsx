import { MdDelete } from "react-icons/md";
const SelectedPlayer = ({ player, filterPlayers }) => {
  const { image, name, batting_style } = player;
  function handleDelete(name) {
    filterPlayers(name);
  }
  return (
    <div className="flex justify-between border ">
      <div className="flex items-center gap-2 ">
        <img
          src={image}
          alt={name}
          className="w-[50px] h-[50px] object-cover rounded"
        />
        <div>
          <h2>{name}</h2>
          <p>{batting_style}</p>
        </div>
      </div>
      <button
        onClick={() => {
          handleDelete(name);
        }}
        className="text-white cursor-pointer hover:text-red-500"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedPlayer;
