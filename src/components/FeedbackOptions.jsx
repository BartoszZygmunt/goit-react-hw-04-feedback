import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* Wyśrodkuj przyciski w poziomie */
  gap: 10px; /* Dodaj odstęp między przyciskami */
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${props => {
    switch (props.type) {
      case 'good':
        return '#4CAF50'; /* Zielony dla 'good' */
      case 'neutral':
        return '#007acc'; /* Niebieski dla 'neutral' */
      case 'bad':
        return '#FF0000'; /* Czerwony dla 'bad' */
      default:
        return '#007acc'; /* Domyślny kolor */
    }
  }};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${props => {
      switch (props.type) {
        case 'good':
          return '#45A049'; /* Kolor tła po najechaniu kursorem dla 'good' */
        case 'neutral':
          return '#005c8a'; /* Kolor tła po najechaniu kursorem dla 'neutral' */
        case 'bad':
          return '#D70000'; /* Kolor tła po najechaniu kursorem dla 'bad' */
        default:
          return '#005c8a'; /* Domyślny kolor tła po najechaniu kursorem */
      }
    }};
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonWrapper>
    {options.map(option => (
      <Button
        key={option}
        type={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </ButtonWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
