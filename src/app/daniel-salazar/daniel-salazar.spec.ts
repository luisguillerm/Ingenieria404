import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielSalazarComponent } from './daniel-salazar';

describe('DanielSalazarComponent', () => {
  let component: DanielSalazarComponent;
  let fixture: ComponentFixture<DanielSalazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanielSalazarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanielSalazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
