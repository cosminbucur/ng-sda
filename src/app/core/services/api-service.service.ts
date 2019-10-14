import { User } from './../../shared/models/user.model';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly USER_API = `${environment.serverApiUrl}/users`;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.USER_API + '/' + id);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.USER_API, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.USER_API + '/' + user.id, user);
  }

  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.USER_API + '/' + id);
  }
}
