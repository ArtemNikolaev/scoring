import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Хуяп';
  showLeftMenu: boolean = false;

  leftMenu() {
    this.showLeftMenu = !this.showLeftMenu;
    console.log('i see the stars');
  }
}
