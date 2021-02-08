import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  someValue: number;

  constructor(private dataService: DataService) {
  }


  increment(): void {
    this.dataService.setNewState();
  }

  ngOnInit(): void {
    // this.someValue = this.dataService.getCurrentState();
    this.dataService.getCurrentState().subscribe(value => this.someValue = value);
  }

}
