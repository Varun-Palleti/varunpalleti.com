import React, { useState, useEffect } from "react";

interface TerminalAnimationProps {
  onComplete: () => void;
}

const TerminalAnimation: React.FC<TerminalAnimationProps> = ({
  onComplete,
}) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [content, setContent] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const bootSequence = [
    "Initializing system...",
    "Loading kernel...",
    "Mounting file systems...",
    "Starting network services...",
    "Boot complete.",
    "",
    "> ls",
    "README.md    projects/    about.txt    contact.json",
    "",
    "> cat README.md",
    "# Welcome to Varun Palleti's Terminal",
    "",
    "This interactive terminal showcases my skills and projects.",
    'Type "help" to see available commands and explore more!',
    "",
    "## Quick Start",
    '- Use "about" to learn about me',
    '- Use "skills" to see my technical expertise',
    '- Use "projects" to view my portfolio',
    '- Use "contact" for my contact information',
    "",
    "Feel free to explore and reach out if you have any questions!",
    "",
  ];

  useEffect(() => {
    if (animationStep < bootSequence.length) {
      const timer = setTimeout(() => {
        setContent((prevContent) => [
          ...prevContent,
          bootSequence[animationStep],
        ]);
        setAnimationStep((prevStep) => prevStep + 1);
      }, Math.random() * 1000 + 250); // Random delay between 250ms and 1250ms (5x slower)

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      onComplete();
    }
  }, [animationStep, onComplete]);

  return (
    <div
      className={`terminal-animation ${isComplete ? "animation-complete" : ""}`}
    >
      {content.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};
export default TerminalAnimation;
