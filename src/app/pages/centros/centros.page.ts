import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterService } from 'src/app/services/centers/center.service';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.page.html',
  styleUrls: ['./centros.page.scss'],
})
export class CentrosPage implements OnInit {
  private listcenters: any;

  constructor(private router: Router, private centers: CenterService) { }

  ngOnInit() {
    this.getcenters();
  }
  prueba(msg) {
    
    this.router.navigate([`/enviar-centro/${msg}`]);
   
  }
  getcenters = async () => {
    await this.centers.getcenters().subscribe(
      (res: any) => {
        this.listcenters = res;
      },
      (err) => {
        console.log(err);
      }
    );
  };

}
