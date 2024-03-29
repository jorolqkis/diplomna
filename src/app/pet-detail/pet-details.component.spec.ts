import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsComponent } from './pet-details.component';

describe('AdoptModalComponent', () => {
  let component: PetDetailsComponent;
  let fixture: ComponentFixture<PetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
