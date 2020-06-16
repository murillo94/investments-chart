import { render } from '@testing-library/react';

import { Chart } from '../../index';

const data = [
  { x: 1565308800000, y: 24960 },
  { x: 1565568000000, y: 24960 }
];

describe('Chart', () => {
  test('should render', () => {
    const { container } = render(<Chart />);

    expect(container).toBeInTheDocument();
  });

  test('should have empty text', () => {
    const { getByText } = render(<Chart />);

    expect(getByText('Sem valor no período')).toBeInTheDocument();
  });

  test('should have data', () => {
    const { getByText } = render(<Chart data={data} />);

    expect(getByText('5 k')).toBeInTheDocument();
    expect(getByText('10 k')).toBeInTheDocument();
    expect(getByText('15 k')).toBeInTheDocument();
    expect(getByText('20 k')).toBeInTheDocument();
    expect(getByText('8 Ago 2019')).toBeInTheDocument();
    expect(getByText('11 Ago 2019')).toBeInTheDocument();
  });
});
