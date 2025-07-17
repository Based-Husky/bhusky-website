import { Component, Input } from '@angular/core';

@Component({
  selector: 'bhusky-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css'
})
export class Logo {

  @Input() isBlue: boolean = false;

}
