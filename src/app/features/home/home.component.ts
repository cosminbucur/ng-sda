import { User } from '../../shared/models/user.model';
import { UsersService } from '../../core/services/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'ng-sda';

  public users: User[];

  private userSubscription: Subscription;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  ngOnDestroy() {
    this.userSubscription = null;
  }

  private fetchUsers() {
    this.userSubscription = this.userService.getAll()
      .subscribe((users: User[]) => {
        this.users = users;
        users.forEach(user => {
          console.log(user);
        });
      });
  }
}
