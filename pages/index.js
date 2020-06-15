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
