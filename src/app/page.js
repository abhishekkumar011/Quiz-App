"use client";
import quizData from "@/data/quizData";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg border-2 border-gray-300">
        {!showResult ? (
          <>
            <h2 className="border-dashed border-gray-600 border-b-2 text-2xl pb-1">
              {quizData[currentQuestion].question}
            </h2>

            <div className="mt-4 flex flex-col gap-2">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`p-2 border rounded-lg transition-all text-left ${
                    selectedAnswer === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg w-full disabled:opacity-50"
            >
              {currentQuestion + 1 < quizData.length ? "Next" : "See Results"}
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="mt-2 text-lg">Your Score : {score} / {quizData.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}
