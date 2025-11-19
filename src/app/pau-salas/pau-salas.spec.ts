import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauSalasComponent } from './pau-salas';

describe('PauSalasComponent', () => {
  let component: PauSalasComponent;
  let fixture: ComponentFixture<PauSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PauSalasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PauSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
