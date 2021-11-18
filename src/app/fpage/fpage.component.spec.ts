import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpageComponent } from './fpage.component';

describe('FpageComponent', () => {
  let component: FpageComponent;
  let fixture: ComponentFixture<FpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
