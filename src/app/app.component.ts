import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public windowWidth: number = window.innerWidth;
  public profileInfo = {
    userId: 'sarojsh01',
    userName: 'Saroj Shakya',
    profilePhoto: 'assets/img/userdata/sarojsh01_profilephoto.jpg',
  };

  public clickNav: string = 'home';
  public inbox: number = 5;

  ngOnInit(): void {
    const path = window.location.pathname;

    let activeIcon = 'home';
    if (path.indexOf('/direct') > -1) activeIcon = 'direct';
    else if (path.indexOf('/explore') > -1) activeIcon = 'explore';
    else if (path.indexOf('/activity') > -1) activeIcon = 'activity';
    else if (path.indexOf('/profile') > -1) activeIcon = 'profile';

    this.clickNav = activeIcon;
  }

  public handleResize(e) {
    this.windowWidth = e.target.innerWidth;
  }

  public handleClickProfile = (e) => {
    this.clickNav = 'profile';
  };

  public handleClickNav = (param) => {
    const navName = param[1];
    if (navName === 'home') {
      this.clickNav = 'home';
    } else if (navName === 'direct') {
      this.clickNav = 'direct';
    } else if (navName === 'explore') {
      this.clickNav = 'explore';
    } else if (navName === 'activity') {
      this.clickNav = 'activity';
    } else if (navName === 'profile') {
      this.clickNav = 'profile';
    } else {
      this.clickNav = '';
    }
  };
}
