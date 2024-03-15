import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubAnnonComponent } from './pub-annon.component';

describe('PubAnnonComponent', () => {
  let component: PubAnnonComponent;
  let fixture: ComponentFixture<PubAnnonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubAnnonComponent]
    });
    fixture = TestBed.createComponent(PubAnnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
