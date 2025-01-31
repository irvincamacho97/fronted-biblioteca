import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLibrosComponent } from './consulta-libros.component';

describe('ConsultaLibrosComponent', () => {
  let component: ConsultaLibrosComponent;
  let fixture: ComponentFixture<ConsultaLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
