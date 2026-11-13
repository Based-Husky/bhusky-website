import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Section } from "./components/section/section";
import { IconLink } from "./components/icon-link/icon-link";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Section, IconLink, Footer],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bhusky-website');
  protected readonly headerLinks = [
    { linkTest: 'About', href: '#about' },
    { linkTest: 'Huskenomics', href: '#huskenomics' },
    { linkTest: 'Buy Now', href: '#buy-now' },
    { linkTest: 'Join', href: '#join' },
    { linkTest: 'Donate', href: '/donate/', cta: true }
  ];
  protected readonly contractAddress = '0x20895E16d5aE9D6e0Ca127ED093a7cBE65dCb018';

  protected async copyAddressToClipboard() {
    await navigator.clipboard.writeText(this.contractAddress);
  }
}
