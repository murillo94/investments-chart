import { useState, useEffect } from 'react';

import { Title } from '../components/title';
import { SubTitle } from '../components/subTitle';
import { Menu, MenuButton, MenuItem, useMenuState } from '../components/menu';
import { Chart } from '../components/chart';

import { formatData } from '../helpers/api';
import { useLocalStorage } from '../helpers/localStorage';
import { getDateAgo } from '../helpers/date';
import {
  PERIODS,
  FROM_THE_BEGINNING,
  LAST_MONTH,
  THREE_MONTH,
  SIX_MONTH,
  ONE_YEAR,
  TWO_YEAR
} from '../helpers/periods';

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

const InvestimentsPage = ({ data = [] }) => {
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
          <SubTitle>Acumulado: {investiments.total}</SubTitle>
          <SubTitle>
            Ganho: {investiments.profit}
            <span> ({investiments.profitPercentage}) </span>
          </SubTitle>
        </div>
        <div>
          <MenuButton {...menu}>
            {PERIODS[currentPeriod]} <ChevronDown />
          </MenuButton>
          <Menu ariaLabel="Períodos" {...menu}>
            <MenuItem
              onClick={() => onClickFilterDate(FROM_THE_BEGINNING)}
              {...menu}
            >
              desde o início
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(LAST_MONTH)} {...menu}>
              último mês
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(THREE_MONTH)} {...menu}>
              3 meses
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(SIX_MONTH)} {...menu}>
              6 meses
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(ONE_YEAR)} {...menu}>
              1 ano
            </MenuItem>
            <MenuItem onClick={() => onClickFilterDate(TWO_YEAR)} {...menu}>
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
            margin: 85px auto;
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

          span {
            color: ${investiments.profitStatus ? '#4ca64c' : '#ff4c4c'};
            margin-left: 5px;
          }

          @media (max-width: 600px) {
            main {
              margin: 60px auto;
              width: 100%;
            }

            header {
              text-align: center;
              flex-direction: column;
            }

            header div:first-child {
              margin: 0 0 30px;
            }
          }
        `}
      </style>
    </main>
  );
};

export default InvestimentsPage;
