import React from 'react';
import Popup from 'reactjs-popup';
import TransactionForm from './TransactionForm';

const PopupModal = ({ isOpen, onClose, onAddTransaction }) => {
    return (
        <Popup open={isOpen} onClose={onClose} modal>
            <div className="bg-gray-200 rounded-lg shadow-xl p-6" style={{ width: '600px' }}>
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Add Transaction</h2>
                <TransactionForm onSubmit={onAddTransaction} />
            </div>
        </Popup>
    );
};

export default PopupModal;
