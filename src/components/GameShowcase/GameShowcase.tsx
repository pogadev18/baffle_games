import Game from "./Game";

import { games } from "@/root/constants";

const GameShowcase = () => {
  return (
    <section className='gamesShowcase flex'>
      {games.map((game) =>
        <Game gameInfo={game}/>
      )}
    </section>

  );
};

export default GameShowcase;