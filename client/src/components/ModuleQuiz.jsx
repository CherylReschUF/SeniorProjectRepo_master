import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Results from "./Results";
import shuffleOptions from "../lib/Shuffle";
import axios from "axios";
import "./style.css";

const points = {
    easy: 2,
    medium: 5,
    hard: 10
};

const ModuleQuiz = ({user, reset}) => {
    const [current, setCurrent] = useState(0);
    const [chosen, setChosen] = useState();
    const [correctChoice, setCorrectChoice] = useState()
    const [choices, setChoices] = useState();
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState();
    const [uid, setUid] = useState();
    const [uName, setUname] = useState();
    const [answerProcessed, setAnswerProcessed] = useState(true);
    const [scoreUploaded, setScoreUploaded] = useState(false);
    const navigate = useNavigate();
    const [gameState, setGameState] = useState("loading");
    const [optionStyles, setOptionStyles] = useState([]);
    const [qType, setQtype] = useState();
    const [numQuestions, setNumQuestions] = useState();

    useEffect(() => {
        if (!user) {
            console.log("Not logged in for quizzes");
            navigate('/loginsignup', { replace: true });
        }
      }, [navigate, user]);

      useEffect(() => {
        //console.log("if user logged in", user, user.id)
        if (user) {
          setUid(user.id);
          setUname(user.username);
          //console.log(user.dateTime);
          console.log("initial useEffect");
          if (!questions) {
            console.log("about to fetch");
            axios.get("/api/questions/get")
            .then(res => {
              setQuestions(res.data)
              setGameState("active")
              console.log("Length:", res.data.length)
              setNumQuestions(res.data.length)
            })
          }
        }
      }, [gameState, questions, user]);

      useEffect(() => {
        if (gameState === "finished" && !scoreUploaded) {
          const payload = {
            username: uName,
            userID: uid,
            score
          };
          console.log({ payload });
          axios.delete("/api/scores/:"+uid);
          axios.post("/api/scores/", payload).then((res) => {
            if (res.status === 200) {
              setScoreUploaded(true);
            } else {
              console.log("unable to save score");
            }
          });
        }
      }, [gameState, score, scoreUploaded, uid, uName]);

    useEffect(() => {
        /*console.log("in create question useEffect", { gameState, answerProcessed });
        console.log("gameState",gameState);
        console.log("answerProcessed:", answerProcessed);
        console.log(questions)*/
        if (gameState !== "loading" && gameState !== "finished") {
        if (answerProcessed) {
            setAnswerProcessed(false);
            console.log("creating question", { current });
            const [answers, correctIndex] =  shuffleOptions(
            questions[current].correct,
            questions[current].incorrect
            );
            setQtype(questions[current].type);
            setChoices(answers);
            setCorrectChoice(correctIndex);
        }
    }
    }, [gameState, current, answerProcessed, questions]);

    useEffect(() => {
        console.log("options style useEffect", choices);
        if (choices) {
          console.log("Choices:", choices);
          setOptionStyles(choices.map(() => ({ opacity: "100%" })));
        }
      }, [choices]);

    useEffect(() => {
        console.log("process answer useEffect", { gameState, chosen });
        if (gameState === "active" && chosen !== undefined) {
          console.log("**********");
          if (chosen === correctChoice) {
            console.log("CORRECT CHOICE");
            setScore(
              (prevState) => prevState + points[qType]
            );
          }
          setChosen(undefined);
          setAnswerProcessed(true);
          if (current+1 === numQuestions) {
            setGameState("finished");
          }
          setCurrent(current + 1);
        }
      }, [chosen, correctChoice, current, gameState, numQuestions, qType, questions]);

      const handleAnswer = (event, answerIndex) => {
        console.log("In handleAnswert")
        setGameState("paused");
        // highlight chosen answer
        // fade incorrect answers
        setOptionStyles(
          choices.map((o, index) => ({
            opacity: index === correctChoice ? "100%" : "0%",
          }))
        );
    
        setTimeout(() => {
          // update option chosen
          setChosen(answerIndex);
          setGameState("active");
        }, 1000);
      };

      return gameState === "loading" ? (
        <div className="loading-container">
            <div className="loader-circle"></div>
            <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <div className="Quiz">
          {gameState !== "finished" ? (
            <>
              <div className="questionWrapper">
                <h1 className="questionTitle">
                  {questions[current].question}
                </h1>
              </div>
              <div className="options row">
                {choices &&
                  choices.map((option, index) => {
                    return (
                      <button className="column"
                        style={optionStyles[index]}
                        onClick={(event) => handleAnswer(event, index)}
                      >
                        {option}
                      </button>
                    );
                  })}
              </div>
            </>
          ) : (
            <Results user={user} score={score} resetQuiz={reset} />
          )}
        </div>
      );
}

export default ModuleQuiz;