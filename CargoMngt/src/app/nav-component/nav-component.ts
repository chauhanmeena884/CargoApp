import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth-service';




@Component({
  selector: 'app-nav-component',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-component.html',
  styleUrl: './nav-component.css',
})
export class NavComponent {
  constructor(public auth: AuthService) {}
}

