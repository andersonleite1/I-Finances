import React, { useState } from 'react';
import Modal from 'react-modal';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import NewTransactionModal from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
