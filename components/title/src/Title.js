export const Title = ({ children }) => (
  <h1>
    {children}

    <style jsx>
      {`
        font-size: 20px;
        font-weight: 800;
        color: #333;
        text-transform: uppercase;
        margin: 0 0 10px;
      `}
    </style>
  </h1>
);
