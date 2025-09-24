import { use } from "react";
import Player from "./Player";

const Players = ({
  playersPromise,
  setPlayerPrice,
  playerPrice,
  totalSelected,
  setTotalSelected,
}) => {
  const players = use(playersPromise);

  return (
    <div className="w-11/12 mx-auto my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-3 ">
      {players.map((player, index) => (
        <Player
          player={player}
          key={index}
          setPlayerPrice={setPlayerPrice}
          playerPrice={playerPrice}
          setTotalSelected={setTotalSelected}
          totalSelected={totalSelected}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
