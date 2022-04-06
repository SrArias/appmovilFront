import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { CenterService } from 'src/app/services/centers/center.service';
import { ToastController } from '@ionic/angular';
import { Toast, route, reset } from 'src/app/utils/utils';

@Component({
  selector: 'app-crear-centro',
  templateUrl: './crear-centro.page.html',
  styleUrls: ['./crear-centro.page.scss'],
})
export class CrearCentroPage implements OnInit {
  centerGroup: FormGroup;

  constructor(
    private actiedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private center: CenterService,
    public toastController: ToastController,
    private router: Router
  ) {
    this.centerGroup = this.formBuilder.group({
      strtelefono: '',
      strdireccion: '',
      strciudad: '',
      strdepartamento: '',
      strnomcen: '',
    });
  }

  ngOnInit() {}

  enviar() {
    this.center.crearCentro(this.centerGroup.value).subscribe(
      async (res: any) => {
        Toast({
          color: 'dark',
          duration: 2000,
          message: 'Se creó el centro correctamente',
        });
        reset(this.centerGroup);
        route(`/centros`);
      },
      (err) => console.log(err)
    );
  }
}
