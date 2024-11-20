import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RittenComponent } from './ritten.component';

describe('RittenComponent', () => {
  let component: RittenComponent;
  let fixture: ComponentFixture<RittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RittenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
