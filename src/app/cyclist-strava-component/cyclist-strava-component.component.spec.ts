import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistStravaComponentComponent } from './cyclist-strava-component.component';

describe('CyclistStravaComponentComponent', () => {
  let component: CyclistStravaComponentComponent;
  let fixture: ComponentFixture<CyclistStravaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyclistStravaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyclistStravaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
