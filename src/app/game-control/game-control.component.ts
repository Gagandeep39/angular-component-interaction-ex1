import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter : number = 0;
  ref ;
  @Output() incremented = new EventEmitter<number>();
 
  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.ref = setInterval(()=>{
      this.counter++;
      this.incremented.emit(this.counter);
    }, 1000);
  }

  stopGame(){
    this.incremented.complete();
  }

}
