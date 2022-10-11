import PropTypes from 'prop-types';
import { TableColumn, TableBody } from './TransactionTableBody.styled';

export const TransactionTableBody = ({ items }) => {
  return (
    <TableBody>
      {items.map(({ type, amount, currency, id }) => {
        return (
          <tr key={id}>
            <TableColumn>{type}</TableColumn>
            <TableColumn>{amount}</TableColumn>
            <TableColumn>{currency}</TableColumn>
          </tr>
        );
      })}
    </TableBody>
  );
};

TransactionTableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currensy: PropTypes.string.isRequired,
    })
  ),
};
