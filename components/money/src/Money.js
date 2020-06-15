export const Money = ({ children }) => (
  <p>
    R$ {children}
    <style jsx>
      {`
        font-size: 24px;
        font-weight: 800;
        color: black;
        margin: 0 0 5px;
      `}
    </style>
  </p>
);
