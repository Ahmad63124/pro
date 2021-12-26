import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Stor } from '../stor';
import { Store } from '../store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  

  constructor(private dataService: DataService) { }
  //store: Store[] = [];
  ngOnInit(): void {
  //  this.store = this.dataService.getStudents();
  }
  @Input()
  store: Stor[];


}
