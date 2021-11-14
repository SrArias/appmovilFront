import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransationsService } from '../../services/transactions/transations.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enviar-centro',
  templateUrl: './enviar-centro.page.html',
  styleUrls: ['./enviar-centro.page.scss'],
})
export class EnviarCentroPage implements OnInit {
  private listcategories: any;
  private listproduct: any;
  private products: any;
  enviarCentroGroup: FormGroup;
  id: number;

  constructor(
    private categories: CategoriesService,
    private product: ProductsService,
    private transacion: TransationsService,
    private actiedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    // private sendCenter: SendCenterService,
    private router: Router
  ) {
    this.enviarCentroGroup = this.formBuilder.group({
      stridprod: {},
      intcanven: 0,
      strcomentven: '',
      intidcentro: 0,
    });
  }

  ngOnInit() {
    this.getcategories();
    try {
      this.actiedroute.paramMap.subscribe((paramMap) => {
        this.id = Number(paramMap.get('id'));
        //this.getproducts(paramMap.get('id'));
        this.enviarCentroGroup.get('intidcentro').setValue(this.id);
      });
    } catch (error) {
      console.log(error);
    }
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
    this.products = this.enviarCentroGroup.get('stridprod').value;

    if (
      this.enviarCentroGroup.get('intcanven').value > this.products.intuniprod
    ) {
      alert('No se puede escoger una cantidad mayor');
    } else {
      this.enviarCentroGroup.get('stridprod').setValue(this.products.idprod);

      await this.transacion.sendtrans(this.enviarCentroGroup.value).subscribe(
        async (res: any) => {
          await this.product
            .actualizarProductos(this.products.idprod, {
              strnomprod: this.products.strnomprod,
              intuniprod:
                this.products.intuniprod-this.enviarCentroGroup.get('intcanven').value,
            })
            .subscribe(
              async (resp: any) => {
                const toast = await this.toastController.create({
                  color: 'dark',
                  duration: 2000,
                  message: 'Se envió correctamente',
                });
                await toast.present();
                this.enviarCentroGroup.reset();
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
    }
    
  };
}
