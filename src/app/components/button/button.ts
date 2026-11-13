import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bhusky-button',
  imports: [],
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './button.css'
})
export class Button {
  @Input() link: string = '';
  @Input() text: string = '';
  @Input() isSecondary: boolean = false;
  @Input() isOnBlue: boolean = false;

}
