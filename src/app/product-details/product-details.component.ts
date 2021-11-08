import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as test from '../products-card/test.json';
import {ModelService} from '../services/model.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  data :any =  test.value[0];
  variants:any=[];
  constructor(private route : ActivatedRoute, private modelService : ModelService) { }

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = String(routeParams.get('productId'));

  console.log(productIdFromRoute);
  this.modelService.getModelByID(productIdFromRoute).subscribe(
     data=>{
       this.data=data[0];
       console.log(this.data);
       if(data[0].variants.length>0){

        this.variants=data[0].variants

        this.data=data[0].variants[0]

       }
     }
  )

  }
  onSelect(event)
  {
  for(let i=0;i<this.variants.length;i++)
  {
   if(this.variants[i].Model_ID==event)
   {
      this.data=this.variants[i]
   }
  }  
  }

}
