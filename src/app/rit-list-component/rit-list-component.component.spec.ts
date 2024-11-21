import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitListComponentComponent } from './rit-list-component.component';

describe('RitListComponentComponent', () => {
  let component: RitListComponentComponent;
  let fixture: ComponentFixture<RitListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RitListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RitListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
