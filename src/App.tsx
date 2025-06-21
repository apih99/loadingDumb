import React, { useState, useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

const statusMessages = [
  "Calculating the Ultimate Answer...",
  "Downloading More RAM...",
  "Reticulating Splines...",
  "Optimizing the optimizers...",
  "Debugging the debugger...",
  "Loading loading screen...",
  "Asking AI for help...",
  "Counting backwards from infinity...",
  "Dividing by zero safely...",
  "Teaching rocks to think...",
  "Consulting the magic 8-ball...",
  "Waiting for Godot...",
  "Compiling chaos into order...",
  "Translating human emotions...",
  "Calibrating the flux capacitor...",
  "Searching for the meaning of life...",
  "Converting coffee to code...",
  "Synchronizing with the universe...",
  "Establishing quantum entanglement...",
  "Almost there... (not really)",
  "Just kidding about being almost there...",
  "Pretending to work very hard...",
  "Shuffling bits and bytes...",
  "Negotiating with the server hamsters..."
];

function App() {
  const [currentMessage, setCurrentMessage] = useState(statusMessages[0]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Change status message every 30 seconds
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % statusMessages.length;
        setCurrentMessage(statusMessages[nextIndex]);
        return nextIndex;
      });
    }, 30000);

    return () => clearInterval(messageInterval);
  }, []);

  // Progress bar animation - climbs to 99.9% over 60 seconds, then resets
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 99.9) {
          setIsResetting(true);
          setTimeout(() => {
            setIsResetting(false);
          }, 500);
          return 0;
        }
        // Exponential curve to slow down as it approaches 99.9%
        const increment = (99.9 - prevProgress) * 0.02;
        return Math.min(prevProgress + Math.max(increment, 0.1), 99.9);
      });
    }, 1000);

    return () => clearInterval(progressInterval);
  }, []);

  const handleCancel = () => {
    setShowDialog(true);
  };

  const handleConfirmCancel = () => {
    // Do nothing - just close the dialog
    setShowDialog(false);
  };

  const handleKeepWaiting = () => {
    setShowDialog(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-25"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Processing...
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl text-blue-200 transition-all duration-500">
              {currentMessage}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-blue-200">Progress</span>
            <span className={`text-sm font-mono text-blue-200 transition-all duration-300 ${
              isResetting ? 'text-red-400 animate-pulse' : ''
            }`}>
              {progress.toFixed(1)}%
            </span>
          </div>
          
          <div className="w-full bg-slate-800/50 rounded-full h-4 overflow-hidden shadow-inner">
            <div 
              className={`h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                isResetting ? 'animate-pulse' : ''
              }`}
              style={{ width: `${progress}%` }}
            >
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-green-400/50 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Status indicators */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400">System Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <span className="text-sm text-yellow-400">Processing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <span className="text-sm text-blue-400">Optimizing</span>
          </div>
        </div>

        {/* Cancel Button */}
        <div className="text-center">
          <button
            onClick={handleCancel}
            className="px-8 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 rounded-full border border-red-500/30 hover:border-red-500/50 transition-all duration-300 font-medium backdrop-blur-sm shadow-lg hover:shadow-red-500/25 hover:scale-105"
          >
            Cancel Operation
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-700 p-8 max-w-md w-full animate-in fade-in zoom-in duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Hold On!</h3>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Are you sure you want to give up? You're <em>so close</em> to something incredible! 
              We've already invested {progress.toFixed(1)}% of the universe's computational power into this.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={handleKeepWaiting}
                className="flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Keep Waiting
              </button>
              <button
                onClick={handleConfirmCancel}
                className="flex-1 px-4 py-3 bg-slate-600 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Give Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;