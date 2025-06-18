import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Palabras } from './palabras';

describe('Palabras', () => {
  let component: Palabras;
  let fixture: ComponentFixture<Palabras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Palabras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Palabras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
