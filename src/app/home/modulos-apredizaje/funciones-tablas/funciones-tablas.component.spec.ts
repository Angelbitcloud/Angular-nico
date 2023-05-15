import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesTablasComponent } from './funciones-tablas.component';

describe('FuncionesTablasComponent', () => {
  let component: FuncionesTablasComponent;
  let fixture: ComponentFixture<FuncionesTablasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionesTablasComponent]
    });
    fixture = TestBed.createComponent(FuncionesTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
