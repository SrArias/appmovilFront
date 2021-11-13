import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-enviar-centro',
  templateUrl: './enviar-centro.page.html',
  styleUrls: ['./enviar-centro.page.scss'],
})
export class EnviarCentroPage implements OnInit {
  private listcategories: any;
  private listproduct: any;
  enviarCentroGroup:FormGroup;

  constructor(
    private categories: CategoriesService,
    private product: ProductsService,

    private actiedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
   // private sendCenter: SendCenterService,
    private router: Router

  ) {
   this.enviarCentroGroup=this.formBuilder.group({
    stridprod:'',
    intcanven:0,
    strcomentven:'',
    intidcentro:0,
   })
  }

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


  prueba=(r)=>{
    
  }
}
