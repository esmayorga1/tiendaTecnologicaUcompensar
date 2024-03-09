import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductItemComponent } from './table-product-item.component';

describe('TableProductItemComponent', () => {
  let component: TableProductItemComponent;
  let fixture: ComponentFixture<TableProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableProductItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
