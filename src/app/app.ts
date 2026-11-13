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
    { linkTest: 'Impact', href: '/impact/' },
    { linkTest: 'Play', href: '#play' },
    { linkTest: 'Huskenomics', href: '#huskenomics' },
    { linkTest: 'Buy Now', href: '#buy-now' },
    { linkTest: 'Join', href: '#join' },
    { linkTest: 'Donate', href: '/donate/', cta: true }
  ];
  /** Home page totals. Keep in sync with public/impact/index.html when a donation is added. */
  protected readonly impact = { donated: '≈ $970', donations: 5, rescues: 3, since: 'December 2024' };
  protected readonly contractAddress = '0x20895E16d5aE9D6e0Ca127ED093a7cBE65dCb018';

  /** True for a moment after the contract address is copied. */
  protected readonly copied = signal(false);
  private copiedTimer?: ReturnType<typeof setTimeout>;

  protected async copyAddressToClipboard() {
    await navigator.clipboard.writeText(this.contractAddress);
    this.copied.set(true);
    clearTimeout(this.copiedTimer);
    this.copiedTimer = setTimeout(() => this.copied.set(false), 2000);
  }
}
