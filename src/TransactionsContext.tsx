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
  createTransaction: (transaction: TransactionInput) => Promise<void>;
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

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction: newTransaction } = response.data;
    setTransactions([...transactions, newTransaction]);
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-constructed-context-values
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
