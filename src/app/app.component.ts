import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsexapleComponent } from './signalsexaple/signalsexaple.component';
import { TrackbyComponent } from './trackby/trackby.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalsexapleComponent,
    TrackbyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parctice';
}
