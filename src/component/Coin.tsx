import React from "react";
import "./Coin.css";

const Coin = () => {
  const createCoin = (): JSX.Element[] => {
    let coins: JSX.Element[] = [];
    for (let i = 0; i < 1000; i++) {
      const n: number = Math.floor(Math.random() * 100);
      console.log(n);
      if (n >= 1)
        coins.push(<span key={i} className="trueCoin Coin-logo"></span>)
      else
        coins.push(<span key={i} className="falseCoin Coin-logo"></span>)
    }
    return coins;
  }
  return (
    <>
      {createCoin()}
    </>
  );
};

export default Coin;
