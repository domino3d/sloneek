import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SignalsService } from '@app/services/signals.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Fix: Change 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  users: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private signalsService: SignalsService
  ) {
    this.http.get<any[]>('/assets/users.json').subscribe((data) => {
      this.users = data;
    });
  }

  onSubmit() {
    const user = this.users.find(
      (u) => u.username === this.username && u.password === this.password
    );
    if (user) {
      this.signalsService.saveUser(user);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
