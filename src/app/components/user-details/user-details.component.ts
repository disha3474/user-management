import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  public user: User | undefined;

  constructor(private route: ActivatedRoute,
    private userService: UserService
) { }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if(!id) {
      return;
    }

    this.userService.getUserById(id || "").subscribe(data => {
      this.user = data;
    });
  }
}
