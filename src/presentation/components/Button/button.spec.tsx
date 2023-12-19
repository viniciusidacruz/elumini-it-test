import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { Button } from '.';

const sut = (isLoading: boolean = false) => (
  <Button aria-label="Botão de exemplo" isLoading={isLoading} disabled={isLoading}>
    Hello
  </Button>
);

describe('Button', () => {
  it('should be correct render component', () => {
    const { getByText } = render(sut());

    const textButton = getByText(/hello/i);

    expect(textButton).toBeTruthy();
  });

  it('should be render loading if params isLoading', () => {
    const { getByTestId, queryByText } = render(sut(true));

    const spinnerContainer = getByTestId('spinner');
    const textButton = queryByText(/hello/i);

    expect(spinnerContainer).toBeTruthy();
    expect(textButton).toBeFalsy();
  });

  it('should be render button disabled if exists params isLoading', () => {
    const { getByTestId, debug } = render(sut(true));

    const buttonContainer = getByTestId(/button/i);

    debug();

    expect(buttonContainer).toHaveProperty('disabled');
  });
});
