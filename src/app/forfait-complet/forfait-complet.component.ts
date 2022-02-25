import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
// import { FORFAITS } from '../mock-forfaits';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  tableauForfaits: Forfaits[] = [];
  
  constructor(private forfaitService: ForfaitService) { }
  
  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.tableauForfaits = resultat)
  }

}
