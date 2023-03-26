import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {

  constructor(public authService: AuthService, private router: Router){}

  selectUser(user: User){
    this.authService.currentUser = user;
    this.router.navigate(['/veicoli']);
  }
}
