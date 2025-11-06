import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnriqueMz } from './enrique-mz';

describe('EnriqueMz', () => {
  let component: EnriqueMz;
  let fixture: ComponentFixture<EnriqueMz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnriqueMz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnriqueMz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
