import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCategoriasComponent } from './header-categorias.component';

describe('HeaderCategoriasComponent', () => {
  let component: HeaderCategoriasComponent;
  let fixture: ComponentFixture<HeaderCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCategoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
