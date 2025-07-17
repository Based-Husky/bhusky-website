import { Component, Input } from '@angular/core';

@Component({
  selector: 'bhusky-icon-link',
  imports: [],
  templateUrl: './icon-link.html',
  styleUrl: './icon-link.css'
})
export class IconLink {
  @Input({ required: true }) iconPath: string = '';
  @Input({ required: true }) href: string = '';
  @Input() size: number = 24;
  @Input() openInNewTab: boolean = false;

}
