import '@testing-library/jest-dom';

import { act, fireEvent, render } from '@testing-library/react';

import TextField from '.';
import { TTestTextField } from './text-field.types';

const sut = ({ isPassword = false, label = '', message = '' }: TTestTextField) => (
  <TextField
    label={label}
    message={message}
    isPassword={isPassword}
    placeholder="Insert your text"
  />
);

describe('Text Field', () => {
  it('should be return correctly fields', () => {
    const { getByPlaceholderText, queryByText } = render(sut({}));

    const inputElement = getByPlaceholderText('Insert your text');
    const labelElement = queryByText('Label');
    const messageElement = queryByText('Message');

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeNull();
    expect(messageElement).toBeNull();
  });

  it('should be return field label', () => {
    const { getByText } = render(sut({ label: 'Label' }));

    const labelElement = getByText('Label');

    expect(labelElement).toBeInTheDocument();
  });

  it('should be return field message', () => {
    const { getByText } = render(sut({ message: 'Invalid message' }));

    const messageElement = getByText('Invalid message');

    expect(messageElement).toBeInTheDocument();
  });

  it('should be update value in onChange', () => {
    const { getByPlaceholderText } = render(sut({}));

    const inputElement = getByPlaceholderText('Insert your text') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '23' } });

    expect(inputElement.value).toBe('23');
  });

  it('should be return button for view password', () => {
    const { getByTestId } = render(sut({ isPassword: true }));

    const buttonIconsPassword = getByTestId('icons-password');

    expect(buttonIconsPassword).toBeInTheDocument();
  });

  it('should be call function for update state visibility password', () => {
    const { getByTestId, queryByTestId } = render(sut({ isPassword: true }));

    const buttonIconsPassword = getByTestId('icons-password');
    const eyeElementIcon = getByTestId('eye');
    const prevEyeOffElementIcon = queryByTestId('eye-off');

    expect(eyeElementIcon).toBeInTheDocument();
    expect(prevEyeOffElementIcon).toBeNull();

    act(() => {
      fireEvent.click(buttonIconsPassword);
    });

    const eyeOffElementIcon = getByTestId('eye-off');
    const nextEyeElementIcon = queryByTestId('eye');

    expect(eyeOffElementIcon).toBeInTheDocument();
    expect(nextEyeElementIcon).toBeNull();
  });
});
