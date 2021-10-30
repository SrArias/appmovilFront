import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {
  public formGroup: FormGroup;
  private cat: number;

  constructor(
    private Actiedroute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      idprod: '',
      strnomprod: '',
      //intidcat: this.cat || 0,
      intuniprod: 0,
    });
  }

  ngOnInit() {
    try {
      this.Actiedroute.paramMap.subscribe((paramMap) => {
        this.cat = Number(paramMap.get('id'));
      });
    } catch (error) {
      console.log(error);
    }
  }

  enviar = () => {
    console.log(this.formGroup.value);
  };
}
