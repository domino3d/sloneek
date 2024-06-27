import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { SignalsService } from '@services/signals.service';
import { TransactionsTableComponent } from '@components/transactions/transactions-table/transactions-table.component';

export interface Transaction {
  date?: Date;
  info?: string;
  value?: number;
  category?: string;
  type?: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    TransactionsTableComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactionForm: FormGroup;
  categories = this.signalsService.categories;

  constructor(private fb: FormBuilder, public signalsService: SignalsService) {
    this.transactionForm = this.fb.group({
      date: ['', Validators.required],
      info: ['', Validators.required],
      value: [0, [Validators.required, Validators.min(0.01)]],
      category: ['', Validators.required],
      type: ['expense', Validators.required],
    });
  }

  ngOnInit() {}

  addTransaction() {
    if (this.transactionForm.valid) {
      const formValue = this.transactionForm.value;
      const value =
        formValue.type === 'income'
          ? Math.abs(formValue.value)
          : -Math.abs(formValue.value);
      const transaction = { ...formValue, value };
      this.signalsService.addTransaction(transaction);
      this.transactionForm.reset({
        date: '',
        info: '',
        value: 0,
        category: '',
        type: 'expense',
      });
    }
  }

  get date() {
    return this.transactionForm.get('date');
  }
  get info() {
    return this.transactionForm.get('info');
  }
  get value() {
    return this.transactionForm.get('value');
  }
  get category() {
    return this.transactionForm.get('category');
  }
  get type() {
    return this.transactionForm.get('type');
  }
}
