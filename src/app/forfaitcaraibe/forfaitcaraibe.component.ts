import { Component, OnInit } from '@angular/core';
import { ForfaitService } from '../forfait.service';
import { Forfaits } from '../forfaits';
//import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfaitcaraibe',
  templateUrl: './forfaitcaraibe.component.html',
  styleUrls: ['./forfaitcaraibe.component.css']
})
export class ForfaitcaraibeComponent implements OnInit {

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
