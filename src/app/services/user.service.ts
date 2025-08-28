import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map(users => users),
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]);
      })
    );
  }

  public getUserById(id: string): Observable<User | undefined> {
    return this.http.get<User[]>(this.url).pipe(
      map(users => users.find(user => user.id === id)),
      catchError(error => {
        console.error('Error fetching users:', error);
        return of(undefined);
      })
    );
  }
}
