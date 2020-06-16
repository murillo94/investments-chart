import { render } from '@testing-library/react';

import { Money } from '../../index';

const content = 1000.98;

describe('Money', () => {
  test('should render', () => {
    const { container } = render(<Money />);

    expect(container).toBeInTheDocument();
  });

  test('should be H2 with text', () => {
    const { container } = render(<Money>{content}</Money>);

    const h2 = container.querySelector('h2');

    expect(h2).toHaveTextContent('R$ 1.000,98');
  });
});
