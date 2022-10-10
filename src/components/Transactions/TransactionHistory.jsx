import { TransactionTableBody } from './TransactionTableBody';
import { Box } from '../Box';
import { Table, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ transaction }) => {
  return (
    <Box
      bg="backgroundPrimary"
      width="700px"
      position="absolute"
      top="16px"
      left="750px"
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
