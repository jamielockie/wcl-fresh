import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { KraftButton } from './Button';

describe('Running Test for Kraft Button', () => {
  test('Check Button Disabled', () => {
    render(<KraftButton disabled>text</KraftButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
