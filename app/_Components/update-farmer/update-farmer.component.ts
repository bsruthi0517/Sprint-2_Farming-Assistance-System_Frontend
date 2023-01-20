import { Component, OnInit } from '@angular/core';



import { ActivatedRoute, Router } from '@angular/router';
import { Farmer } from 'src/app/_Model/farmer.model';
import { FarmerService } from 'src/app/_Service/farmer.service';


@Component({

  selector: 'app-update-farmer',

  templateUrl: './update-farmer.component.html',

  styleUrls: ['./update-farmer.component.css']

})

export class UpdateFarmerComponent implements OnInit{

id: number= 0;

farmer?: Farmer;





submitted=false;



constructor(private route: ActivatedRoute, private router: Router,private farmerService: FarmerService){



 

}

ngOnInit() {

  this.farmer= new Farmer();

  this.id=this.route.snapshot.params['id'];

  this.farmerService.getFarmer(this.id)

  .subscribe(

    (data:any)=>{

      console.log(data)

      this.farmer=data;

    },

    (error:any)=>console.log(error)

  );

}



updateFarmer(){

  this.farmerService.updateFarmer(this.id, this.farmer)

  .subscribe(

    (data:any)=> {

      console.log(data);

      this.farmer=new Farmer();

      this.gotoList();

    },

    (error:any)=>console.log(error)

  );

}



onSubmit() {

  this.submitted = true;

  this.save();

}

  save() {

    this.farmerService

  .updateFarmer(this.id, this.farmer).subscribe((data: any) => {

    console.log(data)

    this.farmer = new Farmer();

    this.gotoList();



  },

    (  error: any) => console.log(error));

  }

  gotoList() {

    this.router.navigate(['/farmers']);

  }



}
