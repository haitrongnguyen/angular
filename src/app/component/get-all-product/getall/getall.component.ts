import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getall.component.html',
  styleUrl: './getall.component.scss'
})
export class GetallComponent implements OnInit{
  constructor(private productService: ProductService){}
  products:any;

  ngOnInit(){
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProduct().subscribe((res)=>{
      console.log(res);
      this.products = res;
    })
  }
}
