import { Injectable, signal } from '@angular/core';
import { Transaction } from '@models/transaction.model';
import { User } from '@app/models/user.model';
import { Category } from '@models/category.enum';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  transactions = signal<Transaction[]>([]);
  categories = signal<string[]>(Object.values(Category));
  user = signal<User | null>(null);

  constructor() {
    this.loadTransactions();
    this.loadCategories();
    this.loadUser();
  }

  addTransaction(transaction: Transaction) {
    const currentTransactions = this.transactions();
    this.transactions.set([...currentTransactions, transaction]);
    this.saveTransactions();
  }

  addCategory(category: string) {
    const currentCategories = this.categories();
    this.categories.set([...currentCategories, category]);
    this.saveCategories();
  }

  removeCategory(category: string) {
    const currentCategories = this.categories();
    this.categories.set(currentCategories.filter((cat) => cat !== category));
    this.saveCategories();
  }

  saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions()));
  }

  loadTransactions() {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      this.transactions.set(JSON.parse(savedTransactions));
    }
  }

  saveCategories() {
    localStorage.setItem('categories', JSON.stringify(this.categories()));
  }

  loadCategories() {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      this.categories.set(JSON.parse(savedCategories));
    }
  }

  saveUser(user: User | null) {
    this.user.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadUser() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user.set(JSON.parse(savedUser));
    }
  }

  logout() {
    this.user.set(null);
    localStorage.removeItem('user');
  }
}
