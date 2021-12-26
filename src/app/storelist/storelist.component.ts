import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Stor } from '../stor';
import { Store } from '../store';

@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.component.html',
  styleUrls: ['./storelist.component.css']
})

export class StorelistComponent implements OnInit,Stor {
 stores:Stor[];
  errorMessage: String;
  constructor(private dataService: DataService) { }
  title: string;
  tyfood: string;
  tim: string;
  dis: string;
  rating: number;
  image1: string;
  image2: string;

  ngOnInit(): void {
    this.dataService.getStudents().subscribe(
      (stores: Stor[])=>{
        
        this.stores = stores;
        console.log(JSON.stringify(this.stores));
        
      },
      (error: any)=> {
        console.log(error);
        this.errorMessage = error;
      }

    )
  }

}
