import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroModificarComponent } from './libro-modificar.component';

describe('LibroModificarComponent', () => {
  let component: LibroModificarComponent;
  let fixture: ComponentFixture<LibroModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
