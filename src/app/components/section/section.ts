import { Component, Input } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'bhusky-section',
  imports: [Button],
  templateUrl: './section.html',
  styleUrl: './section.css'
})
export class Section {

  @Input() title: string = '';
  @Input() ctaLink: string = '';
  @Input() ctaText: string = '';
  @Input() imageUrl: string = '';
  @Input() isBlue: boolean = false;
}
