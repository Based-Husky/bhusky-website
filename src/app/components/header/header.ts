import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Logo } from "../logo/logo";
import { HeaderLink } from './header-link';
import { IconLink } from "../icon-link/icon-link";

@Component({
  selector: 'bhusky-header',
  imports: [Logo, IconLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  @Input({ required: true }) links: HeaderLink[] = [];

  @ViewChild('headerRef') headerRef!: ElementRef;
  @ViewChild('iconsRef') iconsRef!: ElementRef;
  @ViewChild('linksRef') linksRef!: ElementRef;

  protected sidebarMenuIsOpen = false;
  protected showBurger = false;
  protected headerContentMinWidth = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      this.headerContentMinWidth = (this.linksRef?.nativeElement.scrollWidth ?? 0) + (this.iconsRef?.nativeElement.scrollWidth ?? 0) + 250;
      this.checkOverflow();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.checkOverflow();
  }

  private checkOverflow() {
    const headerWidth = this.headerRef.nativeElement.offsetWidth;

    this.showBurger = this.headerContentMinWidth > headerWidth;
  }

  protected toggleMenu() {
    this.sidebarMenuIsOpen = !this.sidebarMenuIsOpen;
  }

  protected checkForResponsiveness(event: Event) {
    console.log(event);
  }

  protected closeMenu() {
    this.sidebarMenuIsOpen = false;
  }
}
