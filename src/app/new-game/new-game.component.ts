import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  players: string[] = [];
  savedPlayers: string[] = [];

  constructor() { }

  ngOnInit() {
      this.savedPlayers = [
          'Artem',
          'Tonya',
          'Коля',
          'Саша Н',
          'Саша М',
          'Юля М',
          'Юля Ж',
          'Дима',
          'Edgar',
          'Roma',
          'Alena',
          'Anya',
          'Pasha',
          'Andrew',
          'Nastya'
      ];
  }

  add(playerName: string) {
      this.players.push(playerName);
  }

  addFromMemory(index: number) {
      const name: string = this.savedPlayers.splice(index, 1)[0];

      this.add(name);
  }

  delete(index: number) {
      this.players.splice(index, 1);
  }

  showModal() {
      console.log('add modal');
  }
}
