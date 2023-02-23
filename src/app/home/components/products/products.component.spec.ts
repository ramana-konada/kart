import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { ProductsService } from "../../services/products/products.service";

import { ProductsComponent } from "./products.component";

class ProductsServiceMock {
  getProducts(): Observable<any> {
    return of(null);
  }
}
describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [CommonModule],
      providers: [{ provide: ProductsService, useClass: ProductsServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    service = TestBed.inject(ProductsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should check ngOninit", () => {
    service.getProducts().subscribe((s: any) => {
      expect(s).toBeNull();
      expect(component.productsList).toBeNull();
    });
  });
});
