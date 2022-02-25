import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfaitcaraibe',
  templateUrl: './forfaitcaraibe.component.html',
  styleUrls: ['./forfaitcaraibe.component.css']
})
export class ForfaitcaraibeComponent implements OnInit {

  tableauForfaits: Forfaits[] = FORFAITS ;

  constructor() { }

  ngOnInit(): void {
  }

}
