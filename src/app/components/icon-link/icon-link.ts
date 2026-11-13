import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bhusky-icon-link',
  imports: [],
  templateUrl: './icon-link.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './icon-link.css'
})
export class IconLink {
  @Input({ required: true }) iconPath: string = '';
  @Input({ required: true }) href: string = '';
  @Input() size: number = 24;
  @Input() openInNewTab: boolean = false;
  /** Accessible name of the link (e.g. "Telegram"). */
  @Input() label: string = '';

}
