import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Season } from '../season';
import { TEAMS } from '../teams';
import { SEASONS } from '../seasons';

@Component({
  selector: 'app-season-template',
  templateUrl: './season-template.component.html',
  styleUrls: ['./season-template.component.css']
})
export class SeasonTemplateComponent implements OnInit {
  selectedSeason: Season;
  teams = TEAMS;
  selectedTeams: Team[] = [];
  pointer: number;
  i: number;
  constructor() { }

  ngOnInit() {
    this.pointer=0;
  }
  onSelect(team: Team,e):void {
    if(e.target.checked){
    this.selectedTeams[this.pointer] = team;
    this.pointer++;
  }
  else  {
    let index = this.selectedTeams.indexOf(team);
    this.selectedTeams.splice(index, 1);
    this.pointer--;
  }
}
}
