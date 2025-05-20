import { useState } from "react";
import classes from "./FreeAskQ.module.scss";

import questions from "./questions";

import Lines from './img/lines.svg'
import Chell from './img/chell.svg'

export default function FreeAskQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={classes.sec}>
    <img className={classes.lines} src={Lines} alt="" />
        <div className={classes.cont}>
        <div className={classes.accordionWrapper}>
          <h1>Freequently Ask Questions</h1>
          <div className={classes.accordion}>
            {questions.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`${classes.accordionItem} ${
                    isActive ? classes.active : ""
                  }`}
                >
                  <div
                    className={classes.accordionTitle}
                    onClick={() => toggle(index)}
                  >
                    <svg
                        className={`${classes.icon} ${isActive ? classes.minus : ""}`}
                        width="0"
                        height="0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6a6af4"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                    <line x1="12" y1="5" x2="12" y2="19" className={classes.vert} />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    <p>{item.question}</p>
                  </div>
                  <div
                    className={`${classes.accordionContent} ${
                      isActive ? classes.open : ""
                    }`}
                  >
                    <div className={classes.innerContent}>{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <button>Discover more <svg width="12" height="20" viewBox="0 0 12 8" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.85802 0.52827C8.11837 0.26792 8.54048 0.26792 8.80083 0.52827L11.8008 3.52827C12.0612 3.78862 12.0612 4.21073 11.8008 4.47108L8.80083 7.47108C8.54048 7.73143 8.11837 7.73143 7.85802 7.47108C7.59767 7.21073 7.59767 6.78862 7.85802 6.52827L9.71995 4.66634H0.66276C0.294571 4.66634 -0.00390625 4.36786 -0.00390625 3.99967C-0.00390625 3.63148 0.294571 3.33301 0.66276 3.33301H9.71995L7.85802 1.47108C7.59767 1.21073 7.59767 0.788619 7.85802 0.52827Z" fill="white"/></svg></button>
        </div>
        <img className={classes.chell} src={Chell} alt="" />
    </div>
    </section>
  );
}
