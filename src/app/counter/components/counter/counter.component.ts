import {ChangeDetectorRef, Component, inject} from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="sumar1()">+1</button>
    <button (click)="restar1()">-1</button>
    <button (click)="resets10()">-rs</button>

  `
})
export class CounterComponent {
  public counter: number = 10;
  cdr=inject(ChangeDetectorRef);
  constructor() {
  }
  sumar1 = (): void => {
    this.counter += 1;
    this.cdr.detectChanges();
  }

  restar1 = ():void => {
    this.counter -= 1;
    this.cdr.detectChanges();
  }

  resets10 = (): void => {
    this.counter = 10;
    this.cdr.detectChanges();
  }

}
