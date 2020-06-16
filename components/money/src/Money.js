import { formatMoney } from '../../../helpers/money';

export const Money = ({ children }) => (
  <h2>
    {formatMoney(children)}
    <style jsx>
      {`
        font-size: 24px;
        font-weight: 800;
        color: black;
        margin: 0 0 5px;
      `}
    </style>
  </h2>
);
