import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';

import { SignalsService } from '@services/signals.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatCheckboxModule,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  newCategory: string = '';
  categories = this.signalsService.categories;

  constructor(public signalsService: SignalsService) {}

  addCategory() {
    if (this.newCategory.trim()) {
      this.signalsService.addCategory(this.newCategory.trim());
      this.newCategory = '';
    }
  }

  removeCategory(category: string) {
    this.signalsService.removeCategory(category);
  }
}
