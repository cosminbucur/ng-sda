import { appRoutesNames } from './../../../app.routes.names';
import { ApiService } from './../../../core/services/api-service.service';
import { Router } from '@angular/router';
import { User } from './../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public users: User[];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  public addUser(): void {
    this.router.navigate([appRoutesNames.ADD_USER]);
  }

  public editUser(user: User): void {
    this.router.navigate([appRoutesNames.EDIT_USER]);
  }

  public deleteUser(user: User): void {
    this.apiService.deleteUser(user.id).subscribe(data => {
      this.users = this.users.filter(u => u !== user);
    });
  }
}
