import { GameInfo } from "@/root/constants";
import Image from "next/image";

interface IGameProps {
  gameInfo: GameInfo;
}

const Game = ({gameInfo}: IGameProps) => {
  return (
    <div className='gameCard w-72 bg-cyan-600'>
      <div className='imageWrapper'>
        <Image src='/matic_logo.png' alt='Matic Logo' width={135} height={135}/>
      </div>
    </div>
  );
};

export default Game;