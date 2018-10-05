import { Component } from '@angular/core';
import { IAppState } from '../../store';
import { NgRedux, select } from '@angular-redux/store';
import { CLEAR_TODOS } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select(state => state.tasking.todos) todos;
  @select(state => state.tasking.lastUpdate) lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
