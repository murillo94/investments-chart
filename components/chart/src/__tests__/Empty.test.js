import { render } from '@testing-library/react';

import { Empty } from '../../index';

const content = 'im h3';

describe('Empty', () => {
  test('should render', () => {
    const { container } = render(<Empty />);

    expect(container).toBeInTheDocument();
  });

  test('should be H3 with text', () => {
    const { container } = render(<Empty>{content}</Empty>);

    const h3 = container.querySelector('h3');

    expect(h3).toHaveTextContent(content);
  });
});
