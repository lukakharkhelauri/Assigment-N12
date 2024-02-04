import React, { useState } from 'react';
import classes from './modules/index.module.scss';
import IconPlus from '../assets/images/icon-plus.svg';
import IconStar from '../assets/images/icon-star.svg'

const FAQs = () => {
  const [answersVisible, setAnswersVisible] = useState(Array(4).fill(false));

  const toggleAnswer = (index) => {
    setAnswersVisible((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[index] = !updatedAnswers[index];
      return updatedAnswers;
    });
  };

  const faqData = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'your_image_url_1.png',
    },
    {
      question: 'Is Frontend Mentor free?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'your_image_url_2.png',
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'your_image_url_3.png',
    },
    {
      question: 'How can I get help if I\'m stuck on a challenge?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'your_image_url_4.png',
    },
  ];

  return (
    <div className={classes["faq-box"]}>
      <img src={IconStar} />
      <div className={classes["faq-title"]}>FAQs</div>

      {faqData.map((faq, index) => (
        <div className={classes["faq-question"]} key={index}>
          <div className={classes["question-header"]}>
            <img src={IconPlus} alt={`Expand`} />
            <button
              className={classes["faq-question-btn"]}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
          </div>
          <div
            className={`${classes["faq-answer"]} ${answersVisible[index] ? classes["visible"] : ''}`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;