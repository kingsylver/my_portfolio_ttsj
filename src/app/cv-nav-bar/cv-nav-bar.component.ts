import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cv-nav-bar',
  templateUrl: './cv-nav-bar.component.html',
  styleUrls: ['./cv-nav-bar.component.scss']
})
export class CvNavBarComponent implements OnInit {

  @Output() searched = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(searchTerm: string){
    this.searched.emit(searchTerm);
  }
}
