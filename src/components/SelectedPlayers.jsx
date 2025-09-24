import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ totalSelected, filterPlayers }) => {
  console.log(totalSelected);

  return (
    <div className="w-11/12 mx-auto my-5 flex flex-col gap-3 ">
      {totalSelected.map((player, index) => (
        <SelectedPlayer
          key={index}
          player={player}
          filterPlayers={filterPlayers}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
