import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignalsService } from './signals.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private signalsService: SignalsService, private router: Router) {}

  canActivate(): boolean {
    if (this.signalsService.user()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
