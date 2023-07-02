"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaSmile,
  FaMeh,
  FaFrown,
} from "react-icons/fa";
import { RiStarLine, RiEmotionLine } from "react-icons/ri";
import { IoHeartOutline, IoHappySharp } from "react-icons/io5";
import {
  BsEmojiLaughingFill,
  BsEmojiWinkFill,
  BsEmojiAngryFill,
} from "react-icons/bs";
import { toast } from "react-hot-toast";

export default function Survey() {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const [textInput, setTextInput] = useState("");
  const [radioAnswers, setRadioAnswers] = useState({
    question4: [],
  });

  const handleChange = (event, questionName, value) => {
    event.preventDefault();

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionName]: value,
    }));
  };

  const handleChangeRadio = (event, questionName, value) => {
    event.preventDefault();

    setRadioAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionName]: prevAnswers[questionName].includes(value)
        ? prevAnswers[questionName].filter((option) => option !== value)
        : [...prevAnswers[questionName], value],
    }));
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const radioOptions = {
    question4: [
      { label: "רמת הקליטה", value: "option1" },
      { label: "שירות לקוחות", value: "option2" },
      { label: "מחיר או גבייה", value: "option3" },
      { label: "הצעה טובה יותר", value: "option4" },
    ],
  };

  const handleSubmit = () => {
    console.log("Survey Answers:", answers);
    console.log("Text Input:", textInput);
    setAnswers({
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    });
    setTextInput("");
    toast.success("הסקר נשלח בהצלחה", {
      duration: 4000,
      style: {
        border: "1px solid #fc40b2",
        padding: "16px",
        color: "black",
      },
      iconTheme: {
        primary: "#fc40b2",
        secondary: "#fff",
      },
    });
  };

  const buttonColors = {
    question1: {
      "thumbs-up": {
        default: "bg-[#2cba00]",
        hover: "bg-[#27a700]",
        selected: "bg-[#27a700]",
      },
      "thumbs-down": {
        default: "bg-[#a3ff00]",
        hover: "bg-[#92e500]",
        selected: "bg-[#92e500]",
      },
      smile: {
        default: "bg-[#ffe800]",
        hover: "bg-[#e5d000]",
        selected: "bg-[#e5d000]",
      },
      meh: {
        default: "bg-[#ffa700]",
        hover: "bg-[#e59600]",
        selected: "bg-[#e59600]",
      },
      frown: {
        default: "bg-[#ff0000]",
        hover: "bg-[#cc0000]",
        selected: "bg-[#cc0000]",
      },
    },
    question2: {
      star: {
        default: "bg-[#2cba00]",
        hover: "bg-[#27a700]",
        selected: "bg-[#27a700]",
      },
      heart: {
        default: "bg-[#a3ff00]",
        hover: "bg-[#92e500]",
        selected: "bg-[#92e500]",
      },
      happy: {
        default: "bg-[#ffe800]",
        hover: "bg-[#e5d000]",
        selected: "bg-[#e5d000]",
      },
      meh: {
        default: "bg-[#ffa700]",
        hover: "bg-[#e59600]",
        selected: "bg-[#e59600]",
      },
      frown: {
        default: "bg-[#ff0000]",
        hover: "bg-[#cc0000]",
        selected: "bg-[#cc0000]",
      },
    },
    question3: {
      star: {
        default: "bg-[#2cba00]",
        hover: "bg-[#27a700]",
        selected: "bg-[#27a700]",
      },
      heart: {
        default: "bg-[#a3ff00]",
        hover: "bg-[#92e500]",
        selected: "bg-[#92e500]",
      },
      happy: {
        default: "bg-[#ffe800]",
        hover: "bg-[#e5d000]",
        selected: "bg-[#e5d000]",
      },
      meh: {
        default: "bg-[#ffa700]",
        hover: "bg-[#e59600]",
        selected: "bg-[#e59600]",
      },
      frown: {
        default: "bg-[#ff0000]",
        hover: "bg-[#cc0000]",
        selected: "bg-[#cc0000]",
      },
    },
  };

  const getButtonStyle = (questionName, value) => {
    const isSelected = answers[questionName] === value;

    return `flex items-center justify-center h-12 w-12 rounded-full ${
      isSelected
        ? `${buttonColors[questionName][value].selected} selected-icon`
        : buttonColors[questionName][value].default
    }`;
  };

  const handleMouseEnter = (questionName, value) => {
    const isSelected = answers[questionName] === value;

    if (!isSelected) {
      const buttonElement = document.getElementById(`${questionName}-${value}`);
      if (buttonElement) {
        buttonElement.classList.add(buttonColors[questionName][value].hover);
      }
    }
  };

  const handleMouseLeave = (questionName, value) => {
    const isSelected = answers[questionName] === value;

    if (!isSelected) {
      const buttonElement = document.getElementById(`${questionName}-${value}`);
      if (buttonElement) {
        buttonElement.classList.remove(buttonColors[questionName][value].hover);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <Image
          src="/images/logo.png"
          width={700}
          height={300}
          alt="רמי לוי תקשורת"
        />
      </div>
      <h1 className="text-2xl mb-4 font-extrabold text-[#fc40b2]">
        סקר תודעת שירות
      </h1>
      <div className="mb-8">
        <p className="font-bold text-center">
          כמה את/ה מרוצה מהשירות שקיבלת מאיתנו?
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <button
            id="question1-thumbs-up"
            className={getButtonStyle("question1", "thumbs-up")}
            onClick={(event) => handleChange(event, "question1", "thumbs-up")}
            onMouseEnter={() => handleMouseEnter("question1", "thumbs-up")}
            onMouseLeave={() => handleMouseLeave("question1", "thumbs-up")}
          >
            <BsEmojiLaughingFill className="text-white" size={40} />
          </button>
          <button
            id="question1-thumbs-down"
            className={getButtonStyle("question1", "thumbs-down")}
            onClick={(event) => handleChange(event, "question1", "thumbs-down")}
            onMouseEnter={() => handleMouseEnter("question1", "thumbs-down")}
            onMouseLeave={() => handleMouseLeave("question1", "thumbs-down")}
          >
            <FaSmile className="text-white" size={40} />
          </button>
          <button
            id="question1-smile"
            className={getButtonStyle("question1", "smile")}
            onClick={(event) => handleChange(event, "question1", "smile")}
            onMouseEnter={() => handleMouseEnter("question1", "smile")}
            onMouseLeave={() => handleMouseLeave("question1", "smile")}
          >
            <FaMeh className="text-white" size={40} />
          </button>
          <button
            id="question1-meh"
            className={getButtonStyle("question1", "meh")}
            onClick={(event) => handleChange(event, "question1", "meh")}
            onMouseEnter={() => handleMouseEnter("question1", "meh")}
            onMouseLeave={() => handleMouseLeave("question1", "meh")}
          >
            <FaFrown className="text-white" size={40} />
          </button>
          <button
            id="question1-frown"
            className={getButtonStyle("question1", "frown")}
            onClick={(event) => handleChange(event, "question1", "frown")}
            onMouseEnter={() => handleMouseEnter("question1", "frown")}
            onMouseLeave={() => handleMouseLeave("question1", "frown")}
          >
            <BsEmojiAngryFill className="text-white" size={40} />
          </button>
        </div>
      </div>
      <div className="mb-8">
        <p className="font-bold text-center">האם התמורה למחיר הייתה הולמת?</p>
        <div className="flex justify-center gap-2 mt-2">
          <button
            id="question2-star"
            className={getButtonStyle("question2", "star")}
            onClick={(event) => handleChange(event, "question2", "star")}
            onMouseEnter={() => handleMouseEnter("question2", "star")}
            onMouseLeave={() => handleMouseLeave("question2", "star")}
          >
            <BsEmojiLaughingFill className="text-white" size={40} />
          </button>
          <button
            id="question2-heart"
            className={getButtonStyle("question2", "heart")}
            onClick={(event) => handleChange(event, "question2", "heart")}
            onMouseEnter={() => handleMouseEnter("question2", "heart")}
            onMouseLeave={() => handleMouseLeave("question2", "heart")}
          >
            <FaSmile className="text-white" size={40} />
          </button>
          <button
            id="question2-happy"
            className={getButtonStyle("question2", "happy")}
            onClick={(event) => handleChange(event, "question2", "happy")}
            onMouseEnter={() => handleMouseEnter("question2", "happy")}
            onMouseLeave={() => handleMouseLeave("question2", "happy")}
          >
            <FaMeh className="text-white" size={40} />
          </button>
          <button
            id="question2-meh"
            className={getButtonStyle("question2", "meh")}
            onClick={(event) => handleChange(event, "question2", "meh")}
            onMouseEnter={() => handleMouseEnter("question2", "meh")}
            onMouseLeave={() => handleMouseLeave("question2", "meh")}
          >
            <FaFrown className="text-white" size={40} />
          </button>
          <button
            id="question2-frown"
            className={getButtonStyle("question2", "frown")}
            onClick={(event) => handleChange(event, "question2", "frown")}
            onMouseEnter={() => handleMouseEnter("question2", "frown")}
            onMouseLeave={() => handleMouseLeave("question2", "frown")}
          >
            <BsEmojiAngryFill className="text-white" size={40} />
          </button>
        </div>
      </div>
      <div className="mb-8">
        <p className="font-bold text-center">
          מה שביעות רצונך מרמת הקליטה ברשת?
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <button
            id="question3-star"
            className={getButtonStyle("question3", "star")}
            onClick={(event) => handleChange(event, "question3", "star")}
            onMouseEnter={() => handleMouseEnter("question3", "star")}
            onMouseLeave={() => handleMouseLeave("question3", "star")}
          >
            <BsEmojiLaughingFill className="text-white" size={40} />
          </button>
          <button
            id="question3-heart"
            className={getButtonStyle("question3", "heart")}
            onClick={(event) => handleChange(event, "question3", "heart")}
            onMouseEnter={() => handleMouseEnter("question3", "heart")}
            onMouseLeave={() => handleMouseLeave("question3", "heart")}
          >
            <FaSmile className="text-white" size={40} />
          </button>
          <button
            id="question3-happy"
            className={getButtonStyle("question3", "happy")}
            onClick={(event) => handleChange(event, "question3", "happy")}
            onMouseEnter={() => handleMouseEnter("question3", "happy")}
            onMouseLeave={() => handleMouseLeave("question3", "happy")}
          >
            <FaMeh className="text-white" size={40} />
          </button>
          <button
            id="question3-meh"
            className={getButtonStyle("question3", "meh")}
            onClick={(event) => handleChange(event, "question3", "meh")}
            onMouseEnter={() => handleMouseEnter("question3", "meh")}
            onMouseLeave={() => handleMouseLeave("question3", "meh")}
          >
            <FaFrown className="text-white" size={40} />
          </button>
          <button
            id="question3-frown"
            className={getButtonStyle("question3", "frown")}
            onClick={(event) => handleChange(event, "question3", "frown")}
            onMouseEnter={() => handleMouseEnter("question3", "frown")}
            onMouseLeave={() => handleMouseLeave("question3", "frown")}
          >
            <BsEmojiAngryFill className="text-white" size={40} />
          </button>
        </div>
      </div>
      <div className="mb-8">
        <p className="font-bold text-center">נשמח לדעת מדוע בחרת לעזוב</p>
        <p className="text-xs text-center text-slate-400 font-bold">
          *ניתן לבחור במספר אופציות
        </p>
        <div className="flex justify-center gap-2 mt-2 radio-buttons">
          {radioOptions.question4.map((option) => (
            <button
              key={option.value}
              id={`question4-${option.value}`}
              className={`${
                radioAnswers.question4.includes(option.value)
                  ? "bg-gray-500"
                  : "bg-[#fc40b2]"
              } text-white px-4 py-2 rounded-md`}
              onClick={(event) =>
                handleChangeRadio(event, "question4", option.value)
              }
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="textbox">
        <div className="text-center">
          <p className="font-bold text-center">
            טקסט חופשי{" "}
            <span className="text-xs text-slate-400">&nbsp;*אופציונלי</span>
          </p>
          <textarea
            value={textInput}
            onChange={handleTextInputChange}
            rows={4}
            cols={50}
            placeholder="כתבו כאן..."
            className="textarea w-10/12"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-[#fc40b2] rounded-md px-4 py-2 text-white mt-4 mb-4"
          >
            שלח סקר
          </button>
        </div>
      </div>
    </div>
  );
}
