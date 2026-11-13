import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Logo } from "../logo/logo";

@Component({
  selector: 'bhusky-footer',
  imports: [Logo],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.css'
})
export class Footer {

}
