import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  private listproduct: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  private productone={
    idprod:'',
    strnomprod:'',
    intuniprod:0
  };
  private id: string;
  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Actiedroute: ActivatedRoute,
    private product: ProductsService,
    private router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
  ) {}

  ngOnInit() {
    try {
      this.Actiedroute.paramMap.subscribe((paramMap) => {
        this.id=paramMap.get('id');
        this.getproducts(paramMap.get('id'));
      });
    } catch (error) {
      console.log(error);
    }
  }

  getproducts = async (id) => {
    await this.product.getProductos(id).subscribe(
      (res: any) => {
        this.listproduct = res;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  one=async (product)=>{

    const alert = await this.alertController.create({
      cssClass: 'ion',
      header: 'Actualizacion',
      inputs: [
        {
          name: 'strnomprod',
          type: 'text',
          placeholder: 'ingrese el titulo de la nota',
          value: product.strnomprod
        },
        {
          name: 'intuniprod',
          type: 'text',
          placeholder: 'ingrese la descripción de la nota',
          value: product.intuniprod
        },
      ],

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel');
          },
        },
        {
          text: 'Actualizar',
          role: 'create',
          cssClass: 'btn btn-secondary',
          handler: async (alertadata) => {

            this.productone = alertadata;
            this.productone.idprod = product.idprod;
            await this.product.actualizarProductos(this.productone.idprod,{
              strnomprod:this.productone.strnomprod,
              intuniprod: this.productone.intuniprod
            }).subscribe(
              async (res: any) => {
                const toast = await this.toastController.create({
                  color: 'dark',
                  duration: 2000,
                  message: 'Se actualizó correctamente',
                });
                await toast.present();

                this.getproducts(this.id);
              },
              (err) => {
                console.log(err);
              }
            );
          },
        }
      ],
    });

    await alert.present();
  };


  crear=()=>{
    this.router.navigate([`/crear-producto/${this.id}`]);
  };
}
