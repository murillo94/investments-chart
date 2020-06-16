import { useEffect } from 'react';
import { render } from '@testing-library/react';

import { useLocalStorage } from '../localStorage';

describe('LocalStorage', () => {
  test('should return changed value storage', () => {
    const Test = () => {
      const [currentPeriod, setCurrentPeriod] = useLocalStorage(
        'currentPeriod'
      );

      useEffect(() => {
        setCurrentPeriod(10);
      }, []);

      return <>value: {currentPeriod}</>;
    };
    const { getByText } = render(<Test />);

    expect(getByText('value: 10')).toBeInTheDocument();
  });
});
