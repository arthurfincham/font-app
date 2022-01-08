import App from './App';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

it('input renders on load', () => {
  render(<App />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

const setup = () => {
  const utils = render(<App />);
  const input = utils.getByRole('textbox');
  const previewRow = utils.getByTestId('Inter-test');
  const italicToggle = utils.getByTestId('Italic-test');
  return {
    input,
    previewRow,
    italicToggle,
    ...utils,
  };
};

test('does not re-render text on input', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'Preview text' } });
  expect(input.value).toBe('Preview text');
});

test('input updates text for preview row', () => {
  const { input, previewRow } = setup();
  fireEvent.change(input, { target: { value: 'Preview text' } });
  expect(previewRow.innerHTML).toBe('Preview text');
});

test('italic toggle changes the style', () => {
  const { italicToggle, previewRow } = setup();
  fireEvent.click(italicToggle);
  expect(previewRow.style.fontStyle).toBe('italic');
});
