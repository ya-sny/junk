import React, {useEffect, useRef} from "react";

export const Dot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) {
      throw new Error("objectがnull");
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("context取得失敗");
    }
    ctx.fillStyle = "red";
    const oneBlock: number = 9;
    let f = 0;
    for (let i: number = 0; i < ctx.canvas.height; i += oneBlock) {
      for (let j: number = 0; j < ctx.canvas.width; j += oneBlock){
        if (f % 2 == 0)
          ctx.fillStyle = "red";
        else
          ctx.fillStyle = "blue";
        ctx.fillRect(i, j, oneBlock, oneBlock);
        f++;
      }
    }
  }, []);
  return (
    <>
      <canvas ref={canvasRef} width={600} height={450} />
    </>
  );
};

export default Dot;
