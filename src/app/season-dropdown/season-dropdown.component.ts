import { Component, OnInit } from '@angular/core';
import { Season } from '../season';
import { SEASONS } from '../seasons';

@Component({
  selector: 'app-season-dropdown',
  templateUrl: './season-dropdown.component.html',
  styleUrls: ['./season-dropdown.component.css']
})
export class SeasonDropdownComponent implements OnInit {
  seasons = SEASONS;
  constructor() { }

  ngOnInit() {
  }

}
