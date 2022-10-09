export const TransactionTableBody = ({ items }) => {
  return (
    <tbody>
      {items.map(({ type, amount, currency, id }) => {
        return (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
