import { render } from '@testing-library/react';
import React from 'react';

describe('Example component', () => {
  it('should be return hello world', () => {
    const { getByText } = render(<h1>Hello World</h1>);

    const textHello = getByText(/hello world/i);

    expect(textHello).toBeInTheDocument();
  });
});
