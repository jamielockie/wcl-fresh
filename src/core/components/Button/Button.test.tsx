import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Running Test for Core Button', () => {
  test('Check Button Disabled', () => {
    render(<Button disabled>text</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('Check Button Exists', () => {
    render(<Button>text</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
