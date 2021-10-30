import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private listcategories: any;
  constructor(private router: Router, private categories: CategoriesService) {}

  ngOnInit() {
    this.getcategories();
  }

  prueba(msg) {
    //this.router.navigate(['/home7']);
    alert(msg);
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
}
