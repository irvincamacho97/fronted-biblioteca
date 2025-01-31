import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesLibroComponent } from './solicitudes-libro.component';

describe('SolicitudesLibroComponent', () => {
  let component: SolicitudesLibroComponent;
  let fixture: ComponentFixture<SolicitudesLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
