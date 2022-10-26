import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import api from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext<Transaction[]>([]);

export default TransactionContext;

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
}
