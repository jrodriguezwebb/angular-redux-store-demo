import { Component } from '@angular/core';
import { IAppState } from '../../store';
import { INCREMENT, DECREMENT } from '../../actions';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  {
  @select() newMessages;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }
}