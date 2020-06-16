import { useState } from 'react';

import { Title } from '../components/title';
import { Money } from '../components/money';
import { Chart } from '../components/chart';

import { formatData } from '../helpers/api';

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

const InvestimentsPage = ({ data }) => {
  const [investiments] = useState(formatData(data));

  return (
    <main>
      <header>
        <div>
          <Title>Rendimentos</Title>
          <Money>{investiments.total}</Money>
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
