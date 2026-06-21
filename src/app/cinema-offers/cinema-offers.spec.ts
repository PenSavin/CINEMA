import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaOffers } from './cinema-offers';

describe('CinemaOffers', () => {
  let component: CinemaOffers;
  let fixture: ComponentFixture<CinemaOffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaOffers],
    }).compileComponents();

    fixture = TestBed.createComponent(CinemaOffers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
