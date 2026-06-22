import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetail } from './view-detail';

describe('ViewDetail', () => {
  let component: ViewDetail;
  let fixture: ComponentFixture<ViewDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
