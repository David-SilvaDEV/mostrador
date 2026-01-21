import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Products } from './products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products, FormsModule, CommonModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
