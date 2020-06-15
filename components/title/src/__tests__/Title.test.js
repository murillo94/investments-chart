import { render } from '@testing-library/react';

import { Title } from '../../index';

const content = 'im h1';

describe('Title', () => {
  test('should render', () => {
    const { container } = render(<Title />);

    expect(container).toBeInTheDocument();
  });

  test('should be H1 with text', () => {
    const { container } = render(<Title>{content}</Title>);

    const h1 = container.querySelector('h1');

    expect(h1).toHaveTextContent(content);
  });

  test('should have uppercase style', () => {
    const { getByRole } = render(<Title>{content}</Title>);

    const title = getByRole('heading');

    expect(title).toHaveStyle('text-transform: uppercase;');
  });
});
