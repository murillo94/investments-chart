const App = ({ Component, pageProps }) => {
  return (
    <>
      <title>Investments Chart</title>
      <Component {...pageProps} />
    </>
  );
};

export default App;
