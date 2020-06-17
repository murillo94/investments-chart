import { render } from '@testing-library/react';

import { SubTitle } from '../SubTitle';

const content = 1000.98;

describe('SubTitle', () => {
  test('should render', () => {
    const { container } = render(<SubTitle />);

    expect(container).toBeInTheDocument();
  });

  test('should be H2 with text', () => {
    const { container } = render(<SubTitle>{content}</SubTitle>);

    const h2 = container.querySelector('h2');

    expect(h2).toHaveTextContent('1000.98');
  });

  test('should have uppercase style', () => {
    const { getByRole } = render(<SubTitle>{content}</SubTitle>);

    const title = getByRole('heading');

    expect(title).toHaveStyle('text-transform: uppercase;');
  });
});
