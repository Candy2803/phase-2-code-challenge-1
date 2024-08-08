# Bank of Flatiron 

This is a web application built with React that allows users to manage transactions. The app includes features like adding, viewing, searching, and deleting transactions.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)


## Features
- **Add Transaction:** Users can add new transactions by filling out a form with details like date, description, category, and amount.
- **View Transactions:** Users can view all transactions in a table format.
- **Search Transactions:** Users can search for specific transactions by description or category.
- **Delete Transaction:** Users can delete any transaction from the list.

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Steps
1. Clone the repository:
    ```bash
    git clone git@github.com:Candy2803/phase-2-code-challenge-1.git
    ```
2. Navigate to the project directory:
    ```bash
    cd phase-2-code-challenge-1
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage
Once the server is running, open your browser and navigate to `http://localhost:3000` to access the application. 

### Adding a Transaction
- Click on the **New Transaction** button.
- Fill in the transaction details in the popup form.
- Click **Submit** to save the transaction.

### Searching Transactions
- Use the search bar at the top to filter transactions by description or category.

### Deleting a Transaction
- Click on the **Delete** button next to the transaction you want to remove.

## Components

### Home
The main component that contains the logic for managing transactions. It includes state management and integrates with the API.

### List
Renders a table with all transactions. Each transaction can be deleted from this list.

### SearchBar
A search input component that filters the transactions based on the user's query.

### PopupModal
A modal component that contains the form for adding new transactions.

### TransactionForm
A form component that handles user input for creating a new transaction.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

WRITTEN BY: **CANDY WAWUDA MZUNGU**
