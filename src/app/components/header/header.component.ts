import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  phoneView = false;

  constructor(public authService: AuthService){}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth <= 990){
      this.phoneView = true;
    }
    else{
      this.phoneView = false;
    }
  }
}
