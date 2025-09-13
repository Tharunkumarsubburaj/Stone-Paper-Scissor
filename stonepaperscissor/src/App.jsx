import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const choices = ['🪨', '📄', '✂️'];
  const [darkMode, setDarkMode] = useState(true);
  const [playerChoice, setPlayerChoice] = useState('None');
  const [computerChoice, setComputerChoice] = useState('None');
  const [result, setResult] = useState('None');
  const [score, setScore] = useState({ won: 0, tie: 0, lost: 0 });

  // Apply dark mode to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(compChoice);
    calculateResult(choice, compChoice);
  };

  const calculateResult = (player, computer) => {
    if (player === computer) {
      setResult('Tie!');
      setScore(prev => ({ ...prev, tie: prev.tie + 1 }));
    } else if (
      (player === '🪨' && computer === '✂️') ||
      (player === '📄' && computer === '🪨') ||
      (player === '✂️' && computer === '📄')
    ) {
      setResult('You Win!');
      setScore(prev => ({ ...prev, won: prev.won + 1 }));
    } else {
      setResult('You Lose!');
      setScore(prev => ({ ...prev, lost: prev.lost + 1 }));
    }
  };

  const reset = () => {
    setPlayerChoice('None');
    setComputerChoice('None');
    setResult('None');
    setScore({ won: 0, tie: 0, lost: 0 });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-700'}`}>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center h-screen justify-center">
        {/* Theme Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-3 rounded-full bg-blue-500/30 hover:bg-blue-500/40 transition-all duration-300 text-white"
        >
          {darkMode ? '🌙' : '🌞'}
        </button>

        {/* Main Content */}
        <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md bg-gray-600/40 dark:bg-gray-800/30 shadow-xl border border-gray-500/30 dark:border-gray-700/30">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-600">
            Rock Paper Scissors
          </h1>

          {/* Choice Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                className="p-6 text-3xl rounded-xl transition-all duration-300 transform hover:scale-110 
                         bg-gradient-to-br from-blue-500/30 to-gray-600/30 hover:from-blue-500/40 hover:to-gray-600/40
                         dark:from-blue-400/10 dark:to-gray-600/10 dark:hover:from-blue-400/20 dark:hover:to-gray-600/20
                         border border-gray-500/40 dark:border-gray-700/30 shadow-lg text-white"
              >
                {choice}
              </button>
            ))}
          </div>

          {/* Game Results */}
          <div className="space-y-4 mb-8 p-6 rounded-xl bg-gray-600/20 dark:bg-gray-800/20 border border-gray-500/30 dark:border-gray-700/20">
            <p className="text-gray-100 dark:text-gray-300">You picked: <span className="font-semibold text-blue-300 dark:text-blue-400">{playerChoice}</span></p>
            <p className="text-gray-100 dark:text-gray-300">Computer picked: <span className="font-semibold text-blue-300 dark:text-blue-400">{computerChoice}</span></p>
            <p className="text-gray-100 dark:text-gray-300">Result: <span className="font-bold text-blue-300 dark:text-blue-400">{result}</span></p>
          </div>

          {/* Score Board */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            {Object.entries(score).map(([key, value]) => (
              <div key={key} className="p-4 rounded-lg bg-gray-600/20 dark:bg-gray-800/20 border border-gray-500/30 dark:border-gray-700/20">
                <p className="text-sm text-gray-200 dark:text-gray-400 capitalize">{key}</p>
                <p className="text-2xl font-bold text-blue-300 dark:text-blue-400">{value}</p>
              </div>
            ))}
          </div>

          {/* Reset Button */}
          <button
            onClick={reset}
            className="w-full py-3 px-6 rounded-lg font-semibold text-white
                     bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800
                     dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900
                     transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
