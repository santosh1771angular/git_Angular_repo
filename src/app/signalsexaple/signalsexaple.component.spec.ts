import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsexapleComponent } from './signalsexaple.component';

describe('SignalsexapleComponent', () => {
  let component: SignalsexapleComponent;
  let fixture: ComponentFixture<SignalsexapleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsexapleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsexapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
