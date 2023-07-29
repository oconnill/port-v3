import React, { useState, useEffect } from "react";
import styles from './styles.module.css'

const ColorBlur = () => {
  const [frequency, setFrequency] = useState(Math.floor(Math.random() * 7) + 4);

  const availableColors = [
    "--dark-orange",
    "--orange",
    "--yellow",
    "--royal-blue",
    "--dark-blue",
  ];
  const randomColor = () => {
    return availableColors[Math.floor(Math.random() * availableColors.length)];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFrequency(Math.floor(Math.random() * 7) + 4);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
      <>
        {Array.from(Array(frequency), (_, index) => (
            <span
                key={index}
                className={styles.color_blur}
                style={{
                  background: `var(${randomColor()})`,
                  right: `${Math.floor(Math.random() * 100)}%`,
                  top: `${Math.floor(Math.random() * 100)}%`,
                  width: `${Math.floor(Math.random() * 100)}%`,
                  height: `${Math.floor(Math.random() * 100)}%`,
                  opacity: `${Math.random() * 0.3 + 0.1}`,
                  animation: "fadeInOut 10s infinite",
                }}
            />
        ))}
        <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
      </>
  );
};

export default ColorBlur;
