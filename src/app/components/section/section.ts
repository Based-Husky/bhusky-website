import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'bhusky-section',
  imports: [Button],
  templateUrl: './section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './section.css'
})
export class Section {

  @Input() title: string = '';
  @Input() ctaLink: string = '';
  @Input() ctaText: string = '';
  @Input() imageUrl: string = '';
  @Input() isBlue: boolean = false;
  @Input() secondaryButtonLink: string = '';
  @Input() secondaryButtonText: string = '';
}
