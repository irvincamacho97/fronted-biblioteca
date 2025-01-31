import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialLibrosComponent } from './historial-libros.component';

describe('HistorialLibrosComponent', () => {
  let component: HistorialLibrosComponent;
  let fixture: ComponentFixture<HistorialLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
