import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  private listproduct: any;
  constructor(private Actiedroute: ActivatedRoute,private product: ProductsService) {}

  ngOnInit() {
    try {
      this.Actiedroute.paramMap.subscribe((paramMap) => {
        this.getproducts(paramMap.get('id'));
        
      });
    } catch (error) {
      console.log(error);
    }
  }

  getproducts = async(id) => {
    await this.product.getcategories(id).subscribe(
      (res: any) => {
        this.listproduct=res
      },
      (err) => {
        console.log(err);
      }
    );
  };
}
