import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
