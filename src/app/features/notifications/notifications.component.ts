import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  constructor(private toastr: ToastrService) { }

  public clickInfo(): void {
    this.toastr.info('This is an informative text', 'Info message');
  }

  public clickSuccess(): void {
    this.toastr.success('This is a successful operation', 'Success message');
  }

  public clickError(): void {
    this.toastr.error('This is an error operation', 'Error message');
  }

}
