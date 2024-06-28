# Expenses Tracker

## TLDR: 
https://stackblitz.com/~/github.com/domino3d/sloneek
admin/admin

## Overview

Expenses Tracker is a simple web application developed using Angular. It allows users to manage their budget by recording expenses and incomes, defining categories, and viewing recorded transactions. The application uses Angular Material for the UI components and Angular Signals for state management. All data is stored locally in the browser's `localStorage`, and no backend server is required.

## Features

- **User Authentication**: Simple user login using credentials stored in a static JSON file.
- **Category Management**: Users can define new categories for their expenses and incomes and remove existing categories.
- **Record Transactions**: Users can record expenses and incomes with details such as date, information, value, and category.
- **Transaction Table**: View all recorded transactions in a tabular format.
- **Data Persistence**: All data is stored locally using `localStorage`.
- **Logout Functionality**: Users can log out, which clears their session data.
- **Responsive Design**: The application is styled using Angular Material to be responsive and user-friendly.

## Included Components

### Login Component

- Allows users to log in with a username and password.
- User credentials are stored in a static JSON file (`assets/users.json`).

### Dashboard Component

- Main landing page after login.
- Contains links to manage categories and record transactions.

### Categories Component

- Users can add new categories.
- Users can remove existing categories.
- Categories are stored in `localStorage`.

### Transactions Component

- Users can record new transactions (expenses and incomes).
- Form includes fields for date, information, value, category, and type (expense/income).
- Transactions are stored in `localStorage`.

### Transactions Table Component

- Displays all recorded transactions in a table format.
- Uses Angular Material's table component for styling.

### Navigation Bar

- A fixed navigation bar at the top with links to different pages (Dashboard, Categories, Transactions, Logout).
- The navigation bar dynamically updates based on the user's login state.

## Setup and Installation

1. **Run the application:**
   ng serve
   Navigate to http://localhost:4200 in your web browser.

### Project Structure

expenses-tracker/
├── src/
│ ├── app/
│ │ ├── auth.guard.ts
│ │ ├── dashboard/
│ │ ├── categories/
│ │ ├── transactions/
│ │ ├── transactions-table/
│ │ ├── login/
│ │ ├── models/
│ │ │ └── category.enum.ts
│ │ ├── services/
│ │ │ └── signals.service.ts
│ │ ├── app-routing.module.ts
│ │ ├── app.module.ts
│ │ ├── app.component.ts
│ │ ├── app.component.html
│ │ ├── app.component.css
│ ├── assets/
│ │ ├── users.json
│ ├── index.html
│ ├── main.ts
├── angular.json
├── package.json
├── README.md

### Data Storage

User data, transactions, and categories are stored locally in the browser's localStorage.

### Usage

Login:
Use one of the predefined user credentials from assets/users.json to log in.
admin/admin

## Dashboard:

Navigate to the Dashboard after logging in. From here, you can manage categories or record transactions.
Manage Categories:

Add new categories or remove existing ones. All categories are stored in localStorage.
Record Transactions:

Record new transactions with details like date, info, value, category, and type (expense/income).
View all recorded transactions in a table format.

## Logout:

Use the logout button in the navigation bar to clear session data and return to the login page.
Dependencies
Angular: The main framework used for building the application.
Angular Material: For UI components and styling.
Angular Signals: For state management.
RxJS: For reactive programming.
TypeScript: The primary language for development.
