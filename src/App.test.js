import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('displays proper description', () => {
  const { getByText } = render(<App />);
  const descriptionText = getByText(/Deployed with AWS CodePipeline and hosted on AWS Elastic Beanstalk./);
  expect(descriptionText).toBeInTheDocument();
});

test('displays proper author', () => {
  const { getByText } = render(<App />);
  const authorText = getByText(/Created by MadCow23456789/);
  expect(authorText).toBeInTheDocument();
});