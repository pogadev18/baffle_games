import { GameInfo } from "@/root/constants";
import Image from "next/image";

interface IGameProps {
  gameInfo: GameInfo;
}

const Game = ({gameInfo}: IGameProps) => {
  const {ticketPrice, totalSum, bigPrize, winners} = gameInfo;

  return (
    <div className='gameCard py-12 px-20 rounded-3xl shadow-2xl text-center'>
      <div className='imageWrapper'>
        <Image className='m-auto' priority src='/matic_logo.png' alt='Matic Logo' width={135} height={135}/>
      </div>
      <div className='info text-white'>
        <p className='uppercase font-semibold text-sm my-7'>Ticket Price {ticketPrice} Matic</p>
        <p className='font-extrabold uppercase text-xl'>Win {totalSum} matic</p>
        <p className='font-extrabold text-base'>big prize {bigPrize} <span className='uppercase'>matic</span></p>
        <p className='font-medium text-base mt-5'>{winners}</p>
        <p className='font-medium'>guaranteed winners</p>
      </div>
    </div>
  );
};

export default Game;