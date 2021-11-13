import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.page.html',
  styleUrls: ['./devoluciones.page.scss'],
})
export class DevolucionesPage implements OnInit {

  private listcategories: any;
  private listproduct: any;
  constructor(
    private categories: CategoriesService,
    private product: ProductsService
  ) {}

  ngOnInit() {
    this.getcategories();
  }

  getcategories = async () => {
    await this.categories.getcategories().subscribe(
      (res: any) => {
        this.listcategories = res;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  getproducts = async ($intidcat) => {
    await this.product.getProductos($intidcat.detail.value).subscribe(
      (res: any) => {
        this.listproduct = res;
      },
      (err) => {
        console.log(err);
      }
    );
  };

}
