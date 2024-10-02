import React, { useEffect, useRef } from "react";

const BouncingBall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Could not get 2D context");
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let x = Math.random() * (width - 100);
    let y = Math.random() * (height - 50);
    let dx = 3;
    let dy = 3;
    const logoWidth = 100;
    const logoHeight = 50;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw a colored rectangle instead of an image for debugging
      ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
      ctx.fillRect(x, y, logoWidth, logoHeight);

      // Add text for visibility
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText("VP", x + logoWidth / 2 - 10, y + logoHeight / 2 + 7);

      x += dx;
      y += dy;

      if (x + logoWidth > width || x < 0) {
        dx = -dx;
        console.log("Bounced horizontally");
      }
      if (y + logoHeight > height || y < 0) {
        dy = -dy;
        console.log("Bounced vertically");
      }

      requestAnimationFrame(animate);
    }

    animate();
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      console.log("Resized:", width, height);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="bouncing-logo"></canvas>;
};

export default BouncingBall;
