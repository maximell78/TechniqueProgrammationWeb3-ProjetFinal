import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfaiteurope',
  templateUrl: './forfaiteurope.component.html',
  styleUrls: ['./forfaiteurope.component.css']
})
export class ForfaiteuropeComponent implements OnInit {

  tableauForfaits: Forfaits[] = FORFAITS ;

  constructor() { }

  ngOnInit(): void {
  }

}
