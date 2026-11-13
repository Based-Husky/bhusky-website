import { Component, ElementRef, ViewChild, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Section } from "./components/section/section";
import { IconLink } from "./components/icon-link/icon-link";
import { Footer } from './components/footer/footer';

/** A game in the Bhusky Games carousel. To add a game, add an entry to `games`. */
interface Game {
  name: string;
  cover: string;
  coverAlt: string;
  badge: string;
  comingSoon?: boolean;
  platforms: string;
  text: string[];
  links: { label: string; href: string }[];
  /** Shown instead of the links while the game is not out yet. */
  soonLabel?: string;
}

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

  protected readonly games: Game[] = [
    {
      name: 'BHUSKY Runner',
      cover: '/bhusky-runner.jpg',
      coverAlt: 'BHUSKY Runner cover: Bhusky running on a country path towards a trail of gold coins',
      badge: 'Beta',
      platforms: 'Telegram',
      text: [
        'An endless runner starring Bhusky: jump, dodge obstacles, grab coins and stack power-ups like the Shield, the Magnet and an actual rocket.',
        'Spend your coins on upgrades in the shop, then challenge your friends to beat your score.'
      ],
      links: [{ label: 'Play on Telegram', href: 'https://t.me/bhuskygames_bot/runner' }]
    },
    {
      name: "Bhusky's Shelter",
      cover: '/bhusky-shelter.jpg',
      coverAlt: "Bhusky's Shelter cover: Bhusky in front of a snowy wooden dog shelter, next to a full food bowl",
      badge: 'Coming soon',
      comingSoon: true,
      platforms: 'Telegram + web',
      text: [
        'Tap, build and adopt: grow a dog shelter into a sanctuary and find your dogs their forever homes.',
        'Daily quests, dog trivia, a secret word every week and 12 ranks to climb.'
      ],
      links: [],
      soonLabel: 'Opens November 18'
    }
  ];

  /** Index of the game shown in the carousel. */
  protected readonly gameIndex = signal(0);
  @ViewChild('gameTrack') private gameTrack?: ElementRef<HTMLElement>;

  protected showGame(index: number) {
    const track = this.gameTrack?.nativeElement;
    if (!track) return;
    const i = Math.max(0, Math.min(this.games.length - 1, index));
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
    this.gameIndex.set(i);
  }

  /** Keeps arrows and dots in sync when the carousel is swiped. */
  protected onGameScroll() {
    const track = this.gameTrack?.nativeElement;
    if (!track || !track.clientWidth) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== this.gameIndex()) this.gameIndex.set(i);
  }

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
