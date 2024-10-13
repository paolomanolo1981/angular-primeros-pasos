import {ChangeDetectionStrategy, Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
   public title: string = 'Hola Mundo';


}
