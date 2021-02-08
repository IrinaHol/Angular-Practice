import {AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, SimpleChanges, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnDestroy, OnChanges, AfterViewInit{
  @ViewChild('xxx')
  xxx: ElementRef;
  @ViewChild(AComponent)
  a: AComponent;
  @ViewChild(BComponent)
  b: BComponent;
  constructor(private dataService: DataService) {

  }
  increment(): void {
this.dataService.setNewState();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log('check');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
  ngAfterViewInit(): void {
    console.log(this.a);
    console.log(this.b);
    console.log(this.a.example = 'example');
    this.xxx.nativeElement.innerText = 'Ok';
  }
}
