import { TransactionTableBody } from './TransactionTableBody';
import { Box } from '../Box';
import { Table, TableHead } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transaction }) => {
  return (
    <Box
      bg="backgroundPrimary"
      width="700px"
      position="absolute"
      top="16px"
      left="800px"
    >
      <Table>
        <thead>
          <tr>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
          </tr>
        </thead>
        <TransactionTableBody items={transaction} />
      </Table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currensy: PropTypes.string.isRequired,
    })
  ),
};
