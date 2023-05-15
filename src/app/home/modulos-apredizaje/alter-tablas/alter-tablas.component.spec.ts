import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterTablasComponent } from './alter-tablas.component';

describe('AlterTablasComponent', () => {
  let component: AlterTablasComponent;
  let fixture: ComponentFixture<AlterTablasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterTablasComponent]
    });
    fixture = TestBed.createComponent(AlterTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
