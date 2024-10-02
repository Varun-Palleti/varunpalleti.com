import React, { useState, useEffect, useRef } from "react";
import TerminalAnimation from "./TerminalAnimation";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<
    Array<{ text: string; timestamp: string }>
  >([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current && showPrompt) {
      inputRef.current.focus();
    }
  }, [showPrompt]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processCommand(input);
    setInput("");
  };

  const getTimestamp = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
  };
  const processCommand = (cmd: string) => {
    const timestamp = getTimestamp();
    const newOutput = [...output, { text: `> ${cmd}`, timestamp }];

    switch (cmd.toLowerCase()) {
      case "help":
        newOutput.push({
          text: "Available commands: about, skills, projects, contact, clear",
          timestamp,
        });
        break;
      case "about":
        newOutput.push({
          text: "I am Varun Palleti, a software developer passionate about creating innovative solutions.",
          timestamp,
        });
        break;
      case "skills":
        newOutput.push({
          text: "My skills include: TypeScript, React, Node.js, and more.",
          timestamp,
        });
        break;
      case "projects":
        newOutput.push({
          text: "Check out my GitHub for a list of my projects: https://github.com/varunpalleti",
          timestamp,
        });
        break;
      case "contact":
        newOutput.push({
          text: "You can reach me at: varun@example.com",
          timestamp,
        });
        break;
      case "clear":
        return setOutput([]);
      default:
        newOutput.push({
          text: 'Command not recognized. Type "help" for available commands.',
          timestamp,
        });
    }

    setOutput(newOutput);
  };
  const handleAnimationComplete = () => {
    setShowPrompt(true);
  };
  return (
    <div className="terminal">
      <div className="terminal-content" ref={outputRef}>
        <TerminalAnimation onComplete={handleAnimationComplete} />
        <div className="terminal-output">
          {output.map((line, index) => (
            <div key={index}>
              <span className="timestamp">{line.timestamp}</span>
              {line.text}
            </div>
          ))}
        </div>
      </div>
      {showPrompt && (
        <form onSubmit={handleInputSubmit} className="terminal-form">
          <span className="timestamp">{getTimestamp()}</span>
          <span className="prompt">{">"}</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            ref={inputRef}
            className="terminal-input"
          />
        </form>
      )}
    </div>
  );
};
export default Terminal;
