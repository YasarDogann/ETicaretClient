import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Create_Product } from '../../../contracts/create_product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService){
      super(spinner);
    }
    
    ngOnInit(): void {
      this.showSpinner(SpinnerType.BallAtom);

      this.httpClientService.get<Create_Product[]>({
        controller: "products"
      }).subscribe(data => console.log(data));

      // this.httpClientService.post({
      //   controller: "products"
      // }, {
      //   name: "Kalem",
      //   stock: 100,
      //   price: 15
      // }).subscribe();

      // this.httpClientService.put({
      //   controller: "products",
      // }, {
      //   id: "01971141-9eb8-741a-80ea-02c8c2088e45",
      //   name: "Tükenmez kalem",
      //   stock: 18,
      //   price: 596
      // }).subscribe()

      // this.httpClientService.delete({
      //   controller: "products"
      // }, "01971143-9aaa-7a53-a2e4-33bf63f4c770").subscribe();

      this.httpClientService.get({
        baseUrl: "https://jsonplaceholder.typicode.com",
        controller: "posts"
      }).subscribe(data => console.log(data));
    }
}
