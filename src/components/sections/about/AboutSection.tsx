import React from "react";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-title">
        <h1>About</h1>
      </div>
      <div className="about-content">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h2>정승민</h2>
          <div className="profile-intro-container">
            <div className="profile-intro-item">
              <div className="profile-intro-item-title">
                문제 의식을 빠르고 명확히 파악하는 개발자입니다.
              </div>
              <p className="profile-intro-item-content">
                실생활에서 겪는 문제를 파악하고 해결하는 것을 좋아합니다. <br />{" "}
                실생활의 문제를 다루는 다수의 공모전에 참가했고, <br />
                2개의 수상 이력이 있습니다.
              </p>
            </div>

            <div className="profile-intro-item">
              <div className="profile-intro-item-title">
                같이 일하고 싶은, 협업을 사랑하는 개발자입니다.
              </div>
              <p>
                사람들과 이야기하는 것을 좋아합니다. <br /> 다수의 협업 경험을
                통해 소통 능력을 키웠습니다. <br />
                협업을 통해 더 나은 결과를 만들어내는 것을 좋아합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
