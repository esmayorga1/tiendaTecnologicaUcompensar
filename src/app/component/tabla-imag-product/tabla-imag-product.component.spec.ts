import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaImagProductComponent } from './tabla-imag-product.component';

describe('TablaImagProductComponent', () => {
  let component: TablaImagProductComponent;
  let fixture: ComponentFixture<TablaImagProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaImagProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaImagProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
