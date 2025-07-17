import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Section } from "./components/section/section";
import { IconLink } from "./components/icon-link/icon-link";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Section, IconLink, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bhusky-website');
  protected readonly headerLinks = [
    { linkTest: 'About', href: '#about' },
    { linkTest: 'Huskenomics', href: '#huskenomics' },
    { linkTest: 'Buy Now', href: '#buy-now' },
    { linkTest: 'Join', href: '#join' }
  ];
  protected readonly contractAddress = '0x20895E16d5aE9D6e0Ca127ED093a7cBE65dCb018';

  protected async copyAddressToClipboard() {
    await navigator.clipboard.writeText(this.contractAddress);
  }
}
