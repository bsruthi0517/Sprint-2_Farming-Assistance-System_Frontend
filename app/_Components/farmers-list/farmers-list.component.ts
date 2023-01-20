import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Farmer } from 'src/app/_Model/farmer.model';
import { FarmerService } from 'src/app/_Service/farmer.service';




@Component({

  selector: 'app-farmers-list',

  templateUrl: './farmers-list.component.html',

  styleUrls: ['./farmers-list.component.css']

})

export class FarmersListComponent implements OnInit {



  farmers?: Observable<Farmer[]>;



  constructor(private farmerService: FarmerService, private router: Router)

  { }

  ngOnInit(){

    this.reloadData();

   

  }



  reloadData(){

    this.farmers=this.farmerService.getAllFarmersList();

  }



  deleteFarmer(farmerId: number)

  {

    this.farmerService.deleteFarmer(farmerId)

    .subscribe(

      (      data: any) => {

        console.log(data);

        this.reloadData();

      },

      (      error: any) => console.log(error));

   

  }



  farmerDetails(farmerId:number)

  {

    this.router.navigate(['details', farmerId]);

  }
}
