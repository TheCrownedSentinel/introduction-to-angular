import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairhouseComponent } from './fairhouse.component';

describe('FairhouseComponent', () => {
  let component: FairhouseComponent;
  let fixture: ComponentFixture<FairhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairhouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
