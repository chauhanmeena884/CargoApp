import { computed, Injectable, signal } from '@angular/core';
import { AuthResponse, UserState } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'cargo-client-auth';
  private readonly apiUrl = 'http://localhost:5173/api/auth';

  readonly user = signal<UserState | null>(null);
  readonly isAuthenticated = computed(() => !!this.user());

  constructor(private http: HttpClient, private router: Router) {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      try {
        this.user.set(JSON.parse(stored));
      } catch {
        localStorage.removeItem(this.storageKey);
      }
    }
  }

  private persist(state: UserState | null): void {
    if (state) {
      localStorage.setItem(this.storageKey, JSON.stringify(state));
      this.user.set(state);
      return;
    }

    localStorage.removeItem(this.storageKey);
    this.user.set(null);
  }

  login(username: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((result) => {
        this.persist({ username, role: result.role, token: result.token });
      })
    );
  }

  register(username: string, password: string, role: string) {
    return this.http.post<{ username: string; role: string }>(`${this.apiUrl}/register`, { username, password, role });
  }

  logout(): void {
    this.persist(null);
    this.router.navigate(['/login']);
  }

  hasRole(role: string): boolean {
    return this.user()?.role === role;
  }

  get authHeaders(): HttpHeaders {
    const token = this.user()?.token;
    return new HttpHeaders({ Authorization: token ? `Bearer ${token}` : '' });
  }
}

