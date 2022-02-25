import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
import { ForfaitService } from '../forfait.service';
//import { FORFAITS } from '../mock-forfaits';


@Component({
  selector: 'app-forfaiteurope',
  templateUrl: './forfaiteurope.component.html',
  styleUrls: ['./forfaiteurope.component.css']
})
export class ForfaiteuropeComponent implements OnInit {

  tableauForfaits: Forfaits[] = [] ;

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.tableauForfaits = resultat)
  }

}
