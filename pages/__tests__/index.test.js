import { render, fireEvent } from '@testing-library/react';

import App from '../index';

const DATA = [
  {
    x: 1565308800000,
    y: 24960
  },
  {
    x: 1565913600000,
    y: 24973.11
  },
  {
    x: 1569283200000,
    y: 114956.8
  }
];

describe('App', () => {
  test('should render', () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });

  test('should have main texts', () => {
    const { getByText } = render(<App data={DATA} />);

    expect(getByText('Rendimentos')).toBeInTheDocument();
    expect(getByText('Acumulado: R$ 114.956,80')).toBeInTheDocument();
    expect(getByText('Ganho: R$ 89.996,80')).toBeInTheDocument();
    expect(getByText('(78,29 %)')).toHaveStyle('color: green');
  });

  test('should have menu click and showing data graph', () => {
    const { getAllByText, getByText } = render(<App data={DATA} />);

    fireEvent.click(getAllByText('desde o início')[0]);
    fireEvent.click(getByText('2 anos'));

    expect(getByText('Acumulado: R$ 114.956,80')).toBeInTheDocument();
    expect(getByText('9 Ago 2019')).toBeInTheDocument();
    expect(getByText('24 Set 2019')).toBeInTheDocument();
  });

  test('should have menu click and showing no data graph', () => {
    const { getAllByText, getByText } = render(<App data={DATA} />);

    fireEvent.click(getAllByText('desde o início')[0]);
    fireEvent.click(getByText('último mês'));

    expect(getByText('Sem valor no período')).toBeInTheDocument();
  });

  test('should have menu navigation with only keyboard', () => {
    const { container, getAllByText } = render(<App data={DATA} />);

    fireEvent.keyDown(container, { key: 'Tab', code: 'Tab' });
    fireEvent.keyDown(container, { key: 'Enter', code: 'Enter' });
    fireEvent.keyDown(container, { key: 'ArrowDown', code: 'ArrowDown' });
    fireEvent.keyDown(container, { key: 'ArrowDown', code: 'ArrowDown' });

    expect(getAllByText('último mês')[0]).toBeInTheDocument();
    expect(getAllByText('último mês')[1]).toBeInTheDocument();
  });
});
