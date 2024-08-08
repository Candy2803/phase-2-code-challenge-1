import React, { useState, useEffect } from 'react';
import List from './List';
import SearchBar from './SearchBar';
import PopupModal from './PopupModal';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const addTransaction = (newTransaction) => {
        fetch("db.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newTransaction)
        })
        .then(res => res.json())
        .then(savedTransaction => {
            console.log("Saved Transaction:", savedTransaction); // Log the server response
            setTransactions(prevTransactions => {
                const updatedTransactions = [...prevTransactions, savedTransaction];
                console.log("Updated Transactions:", updatedTransactions); // Log the updated transactions
                return updatedTransactions;
            });
            setFilteredTransactions(prevTransactions => [...prevTransactions, savedTransaction]);
            closePopup(); // Close the popup after updating the state
        })
        .catch(error => console.error("Error:", error));
    };
    
    

    const deleteTransaction = (id) => {
        fetch(`db.json/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
            setTransactions(updatedTransactions);
            setFilteredTransactions(updatedTransactions);
        })
        .catch(error => console.log("Error:", error));
    };

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => {
                setTransactions(data);
                setFilteredTransactions(data);
            })
            .catch(error => console.log("Error:", error));
    }, []);

    const handleSearch = (query) => {
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
                <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
                <button 
                    onClick={openPopup}
                    className="text-white font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 py-4 px-8 mr-9 rounded-lg shadow-lg transition duration-300 cursor-pointer"
                >
                    New Transaction
                </button>
            </div>
            <PopupModal isOpen={isOpen} onClose={closePopup} onAddTransaction={addTransaction} />
            <List transactions={filteredTransactions} onDelete={deleteTransaction} />
        </div>
    );
}

export default Home;
