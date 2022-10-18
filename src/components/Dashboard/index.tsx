import React from 'react';
import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';
import { Main } from './styles';

export default function Dashboard() {
  return (
    <Main>
      <Summary />
      <TransactionsTable />
    </Main>
  );
}
