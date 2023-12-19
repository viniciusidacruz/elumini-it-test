import '@testing-library/jest-dom';

import { act, fireEvent, render, waitFor } from '@testing-library/react';

import { SignIn } from '.';

const sut = () => <SignIn />;

describe('SignIn', () => {
  it('should be correct render component', () => {
    const { getByText, getByPlaceholderText } = render(sut());

    const titleSection = getByText(/bem vindo de volta/i);
    const descriptionSection = getByText(/entre com suas credenciais corretas/i);
    const usernameField = getByPlaceholderText(/insira seu usuário/i);
    const passwordField = getByPlaceholderText(/insira sua senha/i);

    expect(titleSection).toBeTruthy();
    expect(descriptionSection).toBeTruthy();
    expect(usernameField).toBeTruthy();
    expect(passwordField).toBeTruthy();
  });

  it('should be change value of field username', () => {
    const { getByPlaceholderText } = render(sut());

    const usernameField = getByPlaceholderText(/Insira seu usuário.../i) as HTMLInputElement;

    act(() => {
      fireEvent.change(usernameField, { target: { value: 'example' } });
    });

    expect(usernameField.value).toBe('example');
  });

  it('should be change value of field password', () => {
    const { getByPlaceholderText } = render(sut());

    const passwordField = getByPlaceholderText(/insira sua senha/i) as HTMLInputElement;

    act(() => {
      fireEvent.change(passwordField, { target: { value: 'example' } });
    });

    expect(passwordField.value).toBe('example');
  });

  it('should be return an error message for invalid username', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(sut());

    const usernameField = getByPlaceholderText(/insira seu usuário/i) as HTMLInputElement;
    const sendButton = getByTestId('button');

    act(() => {
      fireEvent.change(usernameField, { target: { value: 'invalid username with space' } });
    });

    act(() => {
      fireEvent.submit(sendButton);
    });

    await waitFor(() => {
      const errorMessage = getByText(/Usuário inválido, remova os espaçamentos!/i);
      expect(errorMessage).toBeTruthy();
    });
  });

  it('should be return an error message for length username', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(sut());

    const usernameField = getByPlaceholderText(/insira seu usuário/i) as HTMLInputElement;
    const sendButton = getByTestId('button');

    act(() => {
      fireEvent.change(usernameField, { target: { value: 'e' } });
    });

    act(() => {
      fireEvent.submit(sendButton);
    });

    await waitFor(() => {
      const errorMessage = getByText(/Por favor insira um usuário valido/i);
      expect(errorMessage).toBeTruthy();
    });
  });

  it('should be return an error message for invalid password', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(sut());

    const passwordField = getByPlaceholderText(/insira sua senha/i) as HTMLInputElement;
    const sendButton = getByTestId('button');

    act(() => {
      fireEvent.change(passwordField, { target: { value: 'e' } });
    });

    act(() => {
      fireEvent.submit(sendButton);
    });

    await waitFor(() => {
      const errorMessage = getByText(/Precisa no minímo conter 6 digitos/i);
      expect(errorMessage).toBeTruthy();
    });
  });
});
