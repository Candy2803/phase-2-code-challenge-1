import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            date: formData.date,
            description: formData.description,
            category: formData.category,
            amount: parseFloat(formData.amount)
        };
        onSubmit(newTransaction);
        setFormData({
            date: "",
            description: "",
            category: "",
            amount: ""
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl">
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
    );
};

export default TransactionForm;
