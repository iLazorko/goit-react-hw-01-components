import { TransactionTableHead } from './TransactionTableHead';
import { TransactionTableBody } from './TransactionTableBody';
import transaction from '../../json/transactions.json';

export const TransactionHistory = () => {
  return (
    <table>
      <TransactionTableHead />
      <TransactionTableBody items={transaction} />
    </table>
  );
};
