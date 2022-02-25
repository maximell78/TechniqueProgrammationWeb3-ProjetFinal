import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaiteuropeComponent } from './forfaiteurope.component';

describe('ForfaiteuropeComponent', () => {
  let component: ForfaiteuropeComponent;
  let fixture: ComponentFixture<ForfaiteuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaiteuropeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaiteuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
