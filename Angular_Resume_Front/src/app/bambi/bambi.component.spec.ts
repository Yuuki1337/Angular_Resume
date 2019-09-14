import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BambiComponent } from './bambi.component';

describe('BambiComponent', () => {
  let component: BambiComponent;
  let fixture: ComponentFixture<BambiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BambiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BambiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
