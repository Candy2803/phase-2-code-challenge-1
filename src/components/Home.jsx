import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import List from './List';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const addTransaction = (e) => {
        e.preventDefault();

        const newTransaction = {
            date: formData.date,
            description: formData.description,
            category: formData.category,
            amount: parseFloat(formData.amount)
        };

        fetch("http://localhost:4000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newTransaction)
        })
        .then(res => res.json())
        .then(savedTransaction => {
            setTransactions(prevTransactions => [...prevTransactions, savedTransaction]);
            setFilteredTransactions(prevTransactions => [...prevTransactions, savedTransaction]);
            closePopup();
        })
        .catch(error => console.log("Error:", error));

        setFormData({
            date: "",
            description: "",
            category: "",
            amount: ""
        });
    };
    

    const deleteTransaction = (id) => {
        fetch(`http://localhost:4000/transactions/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
            setTransactions(updatedTransactions);
            setFilteredTransactions(updatedTransactions);
        })
        .catch(error => console.log("Error:", error));
    };

    // Load transactions from db.json when the component mounts
    useEffect(() => {
        fetch('http://localhost:4000/transactions')
            .then(res => res.json())
            .then(data => {
                setTransactions(data);
                setFilteredTransactions(data);
            })
            .catch(error => console.log("Error:", error));
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = transactions.filter(transaction =>
            transaction.description.toLowerCase().includes(query) ||
            transaction.category.toLowerCase().includes(query)
        );
        setFilteredTransactions(filtered);
    };

    return (
        <div className="min-h-screen flex flex-col p-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4 text-center mt-8">BANK OF FLATIRON</h1>
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="min-w-96 rounded-3xl bg-slate-300"
                    value={searchQuery}
                    onChange={handleSearch}
                />
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
                                value={formData.date}
                                onChange={handleOnChange}
                                className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-purple-500 outline-none" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-black mb-2">Description</label>
                            <input 
                                type="text" 
                                name="description" 
                                value={formData.description}
                                onChange={handleOnChange}
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
                                value={formData.category}
                                onChange={handleOnChange}
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
                                value={formData.amount}
                                onChange={handleOnChange}
                                className="w-full border border-gray-300 rounded-lg p-2 cursor-text focus:ring-2 focus:ring-purple-500 outline-none" 
                                placeholder="Amount" 
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button 
                                type="submit" 
                                className="bg-purple-500 hover:bg-purple-600 min-w-40 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Popup>
            <List transactions={filteredTransactions} onDelete={deleteTransaction} />
        </div>
    );
}

export default Home;
