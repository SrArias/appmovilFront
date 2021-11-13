import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {
  productosGroup: FormGroup;
  private cat: number;

  constructor(
    private actiedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private product: ProductsService,
    private router: Router
  ) {
    this.productosGroup = this.formBuilder.group({
      idprod: '',
      strnomprod: '',
      intidcat: 0,
      intuniprod: 0,
    });
  }

  ngOnInit() {
    try {
      this.actiedroute.paramMap.subscribe((paramMap) => {
        this.cat = Number(paramMap.get('id'));
        this.productosGroup.get('intidcat').setValue(this.cat);
      });
    } catch (error) {
      console.log(error);
    }
  }

  enviar() {
    this.product.crearProductos(this.productosGroup.value).subscribe(
      (res: any) => {
        this.router.navigate([`productos/${this.cat}`]);
      },
      (err) => console.log(err)
    );
  }
}
