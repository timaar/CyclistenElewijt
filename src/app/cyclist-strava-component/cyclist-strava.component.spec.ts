import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistStravaComponent } from './cyclist-strava.component';

describe('CyclistStravaComponentComponent', () => {
  let component: CyclistStravaComponent;
  let fixture: ComponentFixture<CyclistStravaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyclistStravaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyclistStravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
