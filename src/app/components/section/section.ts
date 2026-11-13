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
  /** Text alternative for the section image. */
  @Input() imageAlt: string = '';
  @Input() isBlue: boolean = false;
  /** First section of the page: larger title on desktop. */
  @Input() isHero: boolean = false;
  /** Text-only section: a centred column of readable width. */
  @Input() isCentered: boolean = false;
  @Input() secondaryButtonLink: string = '';
  @Input() secondaryButtonText: string = '';
}
