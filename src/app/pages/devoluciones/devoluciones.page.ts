import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RetprovService } from '../../services/retprov/retprov.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.page.html',
  styleUrls: ['./devoluciones.page.scss'],
})

export class DevolucionesPage implements OnInit {

  private listcategories: any;
  private listproduct: any;
  private products: any;
  retprovGroup: FormGroup;
  id: number;

  constructor(
    private categories: CategoriesService,
    private product: ProductsService,
    private retprov: RetprovService,
    private actiedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router
  ) {
    this.retprovGroup=this.formBuilder.group(
      {
        strcomendep:'',
        intcandep:0,
        stridprod: {}
      }
    )
  }

  ngOnInit() {
    this.getcategories();
    /*try {
      this.actiedroute.paramMap.subscribe((paramMap) => {
        this.id = Number(paramMap.get('id'));
        //this.getproducts(paramMap.get('id'));
        this.retprovGroup.get('intidcentro').setValue(this.id);
      });
    } catch (error) {
      console.log(error);
    }*/
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

  prueba = async () => {
    this.products = this.retprovGroup.get('stridprod').value;

      this.retprovGroup.get('stridprod').setValue(this.products.idprod);

      await this.retprov.crearDev(this.retprovGroup.value).subscribe(
        async (res: any) => {
          await this.product
            .actualizarProductos(this.products.idprod, {
              strnomprod: this.products.strnomprod,
              intuniprod:
                this.products.intuniprod+this.retprovGroup.get('intcandep').value,
            })
            .subscribe(
              async (resp: any) => {
                const toast = await this.toastController.create({
                  color: 'dark',
                  duration: 2000,
                  message: 'Se devolvió el producto correctamente',
                });
                await toast.present();
                this.retprovGroup.reset();
              },
              (err) => {
                console.log(err);
              }
            );
        },
        (err) => {
          console.log(err);
        }
      );
    
    
  };

}
