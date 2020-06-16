import { useState, useEffect } from 'react';

import { Title } from '../components/title';
import { Money } from '../components/money';
import { Menu, MenuButton, MenuItem, useMenuState } from '../components/menu';
import { Chart } from '../components/chart';

import { formatData } from '../helpers/api';
import { useLocalStorage } from '../helpers/localStorage';
import { getDateAgo } from '../helpers/date';

export async function getStaticProps() {
  const res = await fetch(
    'https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js'
  );
  const data = await res.json();
  const investiments = data.map(investiment => ({
    x: investiment[0],
    y: investiment[1]
  }));

  return {
    props: {
      data: investiments
    }
  };
}

const ChevronDown = () => (
  <img src={require('../public/chevron-down.svg')} alt="Exibir menu" />
);

const InvestimentsPage = ({ data }) => {
  const menu = useMenuState();
  const [investiments, setInvestimets] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useLocalStorage('currentPeriod');

  useEffect(() => {
    const dateAgo = getDateAgo(currentPeriod);

    setInvestimets(formatData(data, dateAgo));
  }, [currentPeriod]);

  const onClickFilterDate = period => {
    setCurrentPeriod(period);
  };

  return (
    <main>
      <header>
        <div>
          <Title>Rendimentos</Title>
          <Money>{investiments.total}</Money>
        </div>
        <div>
          <MenuButton {...menu}>
            Períodos <ChevronDown />
          </MenuButton>
          <Menu ariaLabel="Períodos" {...menu}>
            <MenuItem onClick={() => onClickFilterDate('')} {...menu}>
              desde o início
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(1)} {...menu}>
              último mês
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(3)} {...menu}>
              3 meses
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(6)} {...menu}>
              6 meses
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(12)} {...menu}>
              1 ano
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(24)} {...menu}>
              2 anos
            </MenuItem>
          </Menu>
        </div>
      </header>
      <section>
        <Chart data={investiments.data} />
      </section>

      <style jsx>
        {`
          main {
            margin: 100px auto;
            width: 600px;
          }

          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          section {
            margin-top: 50px;
          }
        `}
      </style>
    </main>
  );
};

export default InvestimentsPage;
