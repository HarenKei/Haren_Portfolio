import React, { useState, useEffect } from "react";
import "./AboutSection.css";

const NAMES: string[] = [
  "정승민",
  "Jeong Seungmin",
  "鄭丞民",
  "ジョン スンミン",
  "Haren",
];

const AboutSection: React.FC = () => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentNameIndex((prevIndex) => (prevIndex + 1) % NAMES.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="about-section">
      <h1>안녕하세요</h1>
      <h1>신입 프론트엔드 개발자</h1>
      <h1 className="name-container">
        <div className={`name-slide ${isAnimating ? "slide-out" : "slide-in"}`}>
          <span className="name-text">{NAMES[currentNameIndex]}</span>
        </div>
      </h1>
      <h1>입니다.</h1>
    </div>
  );
};

export default AboutSection;
