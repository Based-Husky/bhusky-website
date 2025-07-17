import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLink } from './icon-link';

describe('IconLink', () => {
  let component: IconLink;
  let fixture: ComponentFixture<IconLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
