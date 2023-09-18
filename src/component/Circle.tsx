import React from "react";
import "./Circle.css";

const Circle = () => {
  const createCircle = (): JSX.Element[] => {
    let circles: JSX.Element[] = [];
    for (let i = 0; i < 1000; i++) {
      const n: number = Math.floor(Math.random() * 100);
      console.log(n);
      if (n >= 1)
        circles.push(<span key={i} className="trueCircle circle-logo"></span>)
      else
        circles.push(<span key={i} className="falseCircle circle-logo"></span>)
    }
    return circles;
  }
  return (
    <>
      {createCircle()}
    </>
  );
};

export default Circle;
