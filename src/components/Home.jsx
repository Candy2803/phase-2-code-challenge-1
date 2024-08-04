import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import List from './List';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const addTransaction = (e) => {
        e.preventDefault();

        const date = e.target.date.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const amount = parseFloat(e.target.amount.value);

        const newTransaction = { id: Date.now(), date, description, category, amount };

        setTransactions([...transactions, newTransaction]);
        closePopup();
    };

    const deleteTransaction = (id) => {
        const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(updatedTransactions);
    };

    return (
        <div className="min-h-screen flex flex-col p-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4 text-center mt-8">BANK OF FLATIRON</h1>
            <div className="flex justify-end mb-4">
                <button 
                    onClick={openPopup} 
                    className="text-white font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 py-4 px-8 mr-9 rounded-lg shadow-lg transition duration-300 cursor-pointer"
                >
                    New Transaction
                </button>
            </div>
            <Popup open={isOpen} onClose={closePopup}>
                <div className="bg-gray-200 rounded-lg shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Add Transaction</h2>
                    <form onSubmit={addTransaction} className="space-y-4 rounded-xl">
                        <div>
                            <label htmlFor="date" className="block text-black mb-2">Date</label>
                            <input 
                                type="date" 
                                name="date" 
                                className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-purple-500 outline-none" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-black mb-2">Description</label>
                            <input 
                                type="text" 
                                name="description" 
                                className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-purple-500 outline-none" 
                                placeholder="Description" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-black mb-2">Category</label>
                            <input 
                                type="text" 
                                name="category" 
                                className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-purple-500 outline-none" 
                                placeholder="Category" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="amount" className="block text-black mb-2">Amount</label>
                            <input 
                                type="number" 
                                name="amount" 
                                className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-purple-500 outline-none" 
                                placeholder="Amount" 
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button 
                                type="submit" 
                                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Popup>
            <List transactions={transactions} onDelete={deleteTransaction} />
        </div>
    );
}

export default Home;
