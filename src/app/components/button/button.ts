import { Component, Input } from '@angular/core';

@Component({
  selector: 'bhusky-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() link: string = '';
  @Input() text: string = '';
  @Input() isSecondary: boolean = false;
  @Input() isOnBlue: boolean = false;

}
