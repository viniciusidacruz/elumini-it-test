import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { Spinner } from '.';

describe('Spinner', () => {
  it('should be correct render component', () => {
    const { getByTestId } = render(<Spinner />);

    const spinnerContainer = getByTestId('spinner');

    expect(spinnerContainer).toBeTruthy();
  });
});
