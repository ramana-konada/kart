import { Component, OnInit } from "@angular/core";
import { ICategoriesModal } from "../../modals/categories.modal";
import { ProductsService } from "../../services/products/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productsList?: ICategoriesModal;
  data: any;
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((s) => {
      console.log(s);
      this.productsList = s;
    });

    this.productService.obs$.subscribe((s) => {
      this.data = s;
    });
  }
}
