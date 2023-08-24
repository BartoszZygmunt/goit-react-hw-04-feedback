import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${props => {
    switch (props.type) {
      case 'good':
        return '#4CAF50';
      case 'neutral':
        return '#007acc';
      case 'bad':
        return '#FF0000';
      default:
        return '#007acc';
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
          return '#45A049';
        case 'neutral':
          return '#005c8a';
        case 'bad':
          return '#D70000';
        default:
          return '#005c8a';
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
