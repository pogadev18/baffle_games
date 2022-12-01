import Game from "./Game";

import { games } from "@/root/constants";

import styles from './GameShowcase.module.scss'

const GameShowcase = () => {
  return (
    <section className={`${styles.gamesShowcase} grid grid-cols-3 justify-items-center`}>
      {games.map((game) =>
        <Game key={game.id} gameInfo={game}/>
      )}
    </section>

  );
};

export default GameShowcase;