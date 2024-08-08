import React from 'react';

const List = ({ transactions, onDelete }) => {
    return (
        <div className="overflow-x-auto mt-6 rounded-xl">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-black text-white text-left">
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Description</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Amount</th>
                        <th className="py-3 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-t border-gray-300 brightness-70 bg-gradient-to-r from-black to-violet-500 text-white">
                            <td className="py-3 px-4">{transaction.date}</td>
                            <td className="py-3 px-4">{transaction.description}</td>
                            <td className="py-3 px-4">{transaction.category}</td>
                            <td className="py-3 px-4">{transaction.amount}</td>
                            <td className="py-3 px-4">
                                <button 
                                    onClick={() => onDelete(transaction.id)} 
                                    className="bg-purple-500 hover:bg-pink-700 shadow-white text-white font-semibold py-1 px-3 rounded-lg shadow-lg transition duration-300"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
