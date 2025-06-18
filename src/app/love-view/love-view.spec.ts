import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveView } from './love-view';

describe('LoveView', () => {
  let component: LoveView;
  let fixture: ComponentFixture<LoveView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
