import { render } from '@testing-library/react';

import { Money } from '../../index';

const content = 1000.98;

describe('Money', () => {
  test('should render', () => {
    const { container } = render(<Money />);

    expect(container).toBeInTheDocument();
  });

  test('should be P with text', () => {
    const { container } = render(<Money>{content}</Money>);

    const p = container.querySelector('p');

    expect(p).toHaveTextContent(content);
  });

  test('should have prefix R$', () => {
    const { getByText } = render(<Money>{content}</Money>);

    const money = getByText(`R$ ${content}`);

    expect(money).toBeInTheDocument();
  });
});
