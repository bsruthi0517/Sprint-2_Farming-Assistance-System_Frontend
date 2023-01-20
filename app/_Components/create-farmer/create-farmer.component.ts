import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Farmer } from 'src/app/_Model/farmer.model';
import { FarmerService } from 'src/app/_Service/farmer.service';



@Component({

  selector: 'app-create-farmer',

  templateUrl: './create-farmer.component.html',

  styleUrls: ['./create-farmer.component.css']

})

export class CreateFarmerComponent implements OnInit {



  farmer: Farmer = new Farmer();



  submitted=false;

  constructor(private farmerService: FarmerService,

    private router: Router) { }



  ngOnInit(): void {

  }



  saveFarmer(){

    this.farmerService.createFarmer(this.farmer).subscribe( data =>{

      console.log(data);

      this.getAllFarmersList();

    },

      (    error: any) => console.log(error));

  }



  getAllFarmersList(){

    this.router.navigate(['/farmers']);

  }

 

  onSubmit(){




   

      this.submitted = true;

       this.saveFarmer();

   

    console.log(this.farmer);

    this.saveFarmer();

  }

 



}

