import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitcaraibeComponent } from './forfaitcaraibe.component';

describe('ForfaitcaraibeComponent', () => {
  let component: ForfaitcaraibeComponent;
  let fixture: ComponentFixture<ForfaitcaraibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitcaraibeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitcaraibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
