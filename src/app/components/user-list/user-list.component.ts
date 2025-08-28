import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
public users: User[] = [];
public headers: string[] = [];
private router = inject(Router);

constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      if (data?.length) {
        this.headers = Object.keys(data[0]);
      }
    });
  }

  public onRowClick(user: User): void {
    this.router.navigate(["/user", user.id]);
  }
}
