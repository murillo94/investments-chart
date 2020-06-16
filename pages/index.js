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

const InvestimentsPage = () => (
  <main>
    <header>
      <div>header 1</div>
      <div>header 2</div>
    </header>
    <section>section</section>

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

export default InvestimentsPage;
