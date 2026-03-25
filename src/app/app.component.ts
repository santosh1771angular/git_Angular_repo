import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsexapleComponent } from './signalsexaple/signalsexaple.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalsexapleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parctice';
}
