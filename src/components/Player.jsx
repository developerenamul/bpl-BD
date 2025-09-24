import { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";
const Player = ({
  player,
  setPlayerPrice,
  playerPrice,
  totalSelected,
  setTotalSelected,
}) => {
  const [selected, setSelected] = useState(false);

  const handlePlayerData = (player) => {
    if (playerPrice < player.price) {
      toast("not have enough balance");
      return;
    }
    if (totalSelected.length === 6) {
      toast("you cant add more than 6");
      return;
    }
    setSelected(true);
    setPlayerPrice(playerPrice - player.price);
    setTotalSelected([...totalSelected, player]);
  };

  const {
    name,
    country,
    playing_role,
    batting_style,
    bowling_style,
    price,
    rating,
    image,
  } = player;
  return (
    <div className="card bg-base-100  shadow-sm border border-2 border-lime-300 pt-5">
      <figure>
        <img
          src={image}
          alt=""
          className=" h-40 object-cover border-b-4 border-lime-300 "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1">
            <span>
              <FaFlag />
            </span>
            <span>{country}</span>
          </div>
          <h2>
            <span className="bg-gray-300 py-1 px-2 rounded text-black font-bold">
              {playing_role}
            </span>
          </h2>
        </div>
        <hr className="border-2 border-lime-300" />
        <div className="flex justify-between items-center my-2">
          <h2 className="font-bold">Rating</h2>
          <h2 className="font-bold">{rating}</h2>
        </div>
        <div className="flex justify-between items-center my-2">
          <h2 className="font-bold">Batting Style</h2>
          <h2 className="font-bold">{batting_style}</h2>
        </div>
        <div className="flex justify-between items-center my-2">
          <h2 className="font-bold">Bowling Style</h2>
          <h2 className="font-bold">{bowling_style}</h2>
        </div>
        <div className="flex justify-between items-center my-2">
          <h2 className="font-bold">${price}</h2>
          <button
            disabled={selected}
            onClick={() => {
              handlePlayerData(player);
            }}
            className="btn bg-lime-300 text-black hover:bg-lime-600"
          >
            {selected ? "selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
