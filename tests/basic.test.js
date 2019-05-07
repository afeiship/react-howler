import React from 'react';
import { render } from 'react-testing-library';
import ReactHowler from '../src/main';

describe('Basic Test', () => {
  it('renders to document', () => {
    const { container } = render(<ReactHowler />);
    const cnt = container.querySelector('.react-howler')
      .innerHTML;
    expect(cnt).toMatch(/Hello React/);
  });
});
