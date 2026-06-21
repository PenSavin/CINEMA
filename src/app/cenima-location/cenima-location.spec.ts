import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenimaLocation } from './cenima-location';

describe('CenimaLocation', () => {
  let component: CenimaLocation;
  let fixture: ComponentFixture<CenimaLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenimaLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(CenimaLocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
