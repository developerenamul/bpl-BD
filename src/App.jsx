import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";
import coin from "./assets/react.svg";
import Banner from "./components/Banner";
import bannerLogo from "./assets/banner-main.png";
import bannerBg from "./assets/bg-shadow.png";
import { Suspense, useState } from "react";
import Players from "./components/Players";
import SelectedPlayers from "./components/SelectedPlayers";
import { ToastContainer } from "react-toastify";

const playersFetch = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = playersFetch();

function App() {
  const [toggle, setToggle] = useState(true);
  const [playerPrice, setPlayerPrice] = useState(16000000);
  const [totalSelected, setTotalSelected] = useState([]);

  function filterPlayers(name) {
    const deletedPlayer = totalSelected.find(
      (player) => player.name.toLowerCase() === name.toLowerCase()
    );
    // console.log(deletedPlayer);
    setPlayerPrice(playerPrice + deletedPlayer.price);

    const newList = totalSelected.filter(
      (player) => player.name.toLowerCase() !== name.toLowerCase()
    );
    setTotalSelected(newList);
  }
  return (
    <>
      <header>
        <Navbar logo={logo} coin={coin} playerPrice={playerPrice}></Navbar>
        <Banner bannerBg={bannerBg} bannerLogo={bannerLogo}></Banner>
      </header>
      <main>
        <section className="top w-11/12 mx-auto mt-5 flex items-center flex-col md:flex-row gap-3 justify-between">
          <h1 className="font-bold text-xl">
            {toggle
              ? "Available Players"
              : `Selected Players(${totalSelected.length}/6)`}
          </h1>
          <div className="text-black font-bold">
            <button
              onClick={() => setToggle(true)}
              className={`p-3 border border-gray-50 rounded-l-lg border-r-0  cursor-pointer bg-gray-300 ${
                toggle ? "bg-lime-300" : ""
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`p-3 border border-gray-50 rounded-r-lg border-l-0   cursor-pointer bg-gray-300 ${
                toggle ? "" : "bg-lime-300 "
              }`}
            >
              Selected({totalSelected.length})
            </button>
          </div>
        </section>

        {toggle ? (
          <Suspense
            fallback={
              <p className="text-center">
                <span className="loading loading-ring loading-xl"></span>
              </p>
            }
          >
            <Players
              playersPromise={playersPromise}
              setPlayerPrice={setPlayerPrice}
              playerPrice={playerPrice}
              totalSelected={totalSelected}
              setTotalSelected={setTotalSelected}
            ></Players>
          </Suspense>
        ) : (
          <SelectedPlayers
            totalSelected={totalSelected}
            filterPlayers={filterPlayers}
          ></SelectedPlayers>
        )}

        <ToastContainer></ToastContainer>
      </main>
    </>
  );
}

export default App;
