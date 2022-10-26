import React, { useState } from 'react';
import Modal from 'react-modal';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import NewTransactionModal from './components/NewTransactionModal';
import TransactionContext from './TransactionsContext';

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
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TransactionContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </TransactionContext.Provider>
  );
}

export default App;
