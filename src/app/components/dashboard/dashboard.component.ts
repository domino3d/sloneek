import { Component } from '@angular/core';
import { provideRouter, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [RouterLink],
})
export class DashboardComponent {}
