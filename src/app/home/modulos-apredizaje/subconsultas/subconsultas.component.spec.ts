import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubconsultasComponent } from './subconsultas.component';

describe('SubconsultasComponent', () => {
  let component: SubconsultasComponent;
  let fixture: ComponentFixture<SubconsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubconsultasComponent]
    });
    fixture = TestBed.createComponent(SubconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
