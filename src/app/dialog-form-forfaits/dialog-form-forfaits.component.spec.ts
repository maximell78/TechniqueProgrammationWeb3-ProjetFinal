import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormForfaitsComponent } from './dialog-form-forfaits.component';

describe('DialogFormForfaitsComponent', () => {
  let component: DialogFormForfaitsComponent;
  let fixture: ComponentFixture<DialogFormForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
