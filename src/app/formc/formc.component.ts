import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { DataService } from '../data.service';
@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  styleUrls: ['./formc.component.css']
})
export class FormcComponent implements OnInit {
  store: Store = new Store();
  submitted = false;
  responseText = "";
    constructor(private dataService:DataService) { }
  onSubmit(){
    this.submitted = true;
    console.log(JSON.stringify(this.store));
    
    this.dataService.addStudent(this.store).subscribe(
      (data)=> this.responseText = JSON.stringify(this.store),
      (error)=> this.responseText = error
    )
    
  }
  ngOnInit(): void {
  }

}
