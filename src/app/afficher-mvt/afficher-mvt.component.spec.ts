import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMvtComponent } from './afficher-mvt.component';

describe('AfficherMvtComponent', () => {
  let component: AfficherMvtComponent;
  let fixture: ComponentFixture<AfficherMvtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherMvtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherMvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
