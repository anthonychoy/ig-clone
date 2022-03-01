import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/modules/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css', '../../../app.component.css'],
})
export class ProfilePageComponent implements OnInit {
  public loginUser: string = '';
  public imgUrl: string = '';
  public settingIcon: string =
    'M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z';

  public userProfile: User = {
    userId: '',
    userName: '',
    followedBy: [],
    follows: [],
    profilePhoto: '',
    bio: { intro: '', website: '' },
    posts: [],
  };

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let userId;
    this.route.params.subscribe(params => {
      userId = params['user_id'];
    });

    this.userService.getUserProfile(userId).then((response) => {
      if (response.results.length === 1) {
        const user = response.results[0];

        this.loginUser = `${user.name.first}-${user.name.last}`;
        this.imgUrl = user.picture.thumbnail;

        this.userProfile.userId = user.login.uuid;
        this.userProfile.userName = user.login.username;
        this.userProfile.profilePhoto = this.imgUrl;
        this.userProfile.bio = { 
          intro: `${user.name.title} ${user.name.first} ${user.name.last}`, 
          website: user.email
        };
      }
    });
  }

  public handleEditProfile(): void {
    alert('This feature is not available right now!');
  }
}
