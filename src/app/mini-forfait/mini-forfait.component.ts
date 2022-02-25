import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
//import { FORFAITS } from '../mock-forfaits';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
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
