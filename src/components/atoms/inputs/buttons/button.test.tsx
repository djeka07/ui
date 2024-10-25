import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Button from './button';

describe('GIVEN Button', () => {
  test('WHEN', () => {
    const { asFragment } = render(
      <Button label="Hej" aria-controls="hej">
        Click
      </Button>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
