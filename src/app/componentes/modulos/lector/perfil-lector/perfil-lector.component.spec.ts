import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilLectorComponent } from './perfil-lector.component';

describe('PerfilLectorComponent', () => {
  let component: PerfilLectorComponent;
  let fixture: ComponentFixture<PerfilLectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilLectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
