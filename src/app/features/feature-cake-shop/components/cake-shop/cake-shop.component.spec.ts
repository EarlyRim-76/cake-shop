import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeShopComponent } from './cake-shop.component';

describe('CakeShopComponent', () => {
  let component: CakeShopComponent;
  let fixture: ComponentFixture<CakeShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
