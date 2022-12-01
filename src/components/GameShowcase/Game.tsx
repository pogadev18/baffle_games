import { useState } from 'react';
import { GameInfo } from "@/root/constants";
import Image from "next/image";

import styles from './Game.module.scss';

interface IGameProps {
  gameInfo: GameInfo;
}

const Game = ({gameInfo}: IGameProps) => {
  const {ticketPrice, totalSum, bigPrize, winners} = gameInfo;
  const [ticketsValue, setTicketsValue] = useState(0);

  return (
    <div className='gameCard py-12 w-72 rounded-3xl shadow-2xl text-center'>
      <div className='imageWrapper'>
        <Image className='m-auto' priority src='/matic_logo.png' alt='Matic Logo' width={135} height={135}/>
      </div>
      <div className='info text-white'>
        <p className='uppercase font-semibold text-sm my-7'>Ticket Price {ticketPrice} Matic</p>
        <p className='font-extrabold uppercase text-xl'>Win {totalSum} matic</p>
        <p className='font-extrabold text-base'>big prize {bigPrize} <span className='uppercase'>matic</span></p>
        <p className='font-medium text-xl font-extrabold mt-5'>{winners}</p>
        <p className='font-medium'>guaranteed winners</p>
      </div>
      <div className='text-left px-4'>
        <div className={styles.ticketsBar}>
          <div className={styles.ticketsPercentageBar}/>
        </div>
        <p className='text-subtle-gray text-sm mb-3'>Select Ticket Amount</p>
        <div className='range'>
          <datalist id="tickmarks">
            <option value="0" label="0"></option>
            <option value="10" label="10"></option>
            <option value="20" label="20"></option>
            <option value="30" label="30"></option>
            <option value="40" label="40"></option>
            <option value="50" label="50"></option>
          </datalist>
          <input
            list="tickmarks"
            id="tick"
            name="tick"
            type="range"
            min="0"
            max="50"
            step="1"
            value={ticketsValue}
            onChange={(e) => setTicketsValue(Number(e.target.value))}
            className="w-full h-3 bg-white rounded-lg appearance-none cursor-pointer"/>
        </div>
        <div className='moreButton'>
          <button type='button' className='text-white text-main-blue uppercase text-xs'>Buy <span className='text-white'>{ticketsValue}</span> tickets</button>
        </div>
      </div>

    </div>
  );
};

export default Game;