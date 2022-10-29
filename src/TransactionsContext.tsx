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

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // Omit: omitir propriedades

/* eslint-disable no-unused-vars */
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export default TransactionContext;

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-constructed-context-values
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
