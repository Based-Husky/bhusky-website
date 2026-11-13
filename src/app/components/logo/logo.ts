import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bhusky-logo',
  imports: [],
  templateUrl: './logo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './logo.css'
})
export class Logo {

  @Input() isBlue: boolean = false;

}
