import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TransactionsTableComponent } from '@components/transactions/transactions-table/transactions-table.component';
import { TransactionsComponent } from '@components/transactions/transactions.component';
import { CategoriesComponent } from '@components/categories/categories.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { LoginComponent } from '@components/login/login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    // AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    LoginComponent,
    DashboardComponent,
    CategoriesComponent,
    TransactionsComponent,
    TransactionsTableComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';

// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { CategoriesComponent } from './categories/categories.component';
// import { TransactionsComponent } from './transactions/transactions.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     HttpClientModule,
//     MatInputModule,
//     MatSelectModule,
//     MatCheckboxModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     MatButtonModule,
//     MatCardModule,
//     AppRoutingModule,
//     LoginComponent,
//     DashboardComponent,
//     CategoriesComponent,
//     TransactionsComponent,
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
