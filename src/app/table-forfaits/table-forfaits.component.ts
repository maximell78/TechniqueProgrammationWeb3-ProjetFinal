import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
import { ForfaitService } from '../forfait.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormForfaitsComponent } from '../dialog-form-forfaits/dialog-form-forfaits.component';

@Component({
  selector: 'app-table-forfaits',
  templateUrl: './table-forfaits.component.html',
  styleUrls: ['./table-forfaits.component.css']
})
export class TableForfaitsComponent implements OnInit {
  tableauForfaits: Forfaits[] = [];
  selectedForfait?: Forfaits;
  columnsToDisplay = ['destination', 'villeDepart', 'actions'];

  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.tableauForfaits = resultat);
  }

  onDelete(tableauForfaits: Forfaits) {
    this.forfaitService.deleteForfait(tableauForfaits.id)
      .subscribe(_ => this.tableauForfaits = this.tableauForfaits.filter(p => p !== tableauForfaits));
  }

  onSelect(tableauForfaits?: Forfaits) {
    if (!tableauForfaits) {
      this.selectedForfait= { id: '', region: '', destination: '', villeDepart: '', dateDepart: '', duree: '', prix: 0, rabais: 0, affichageRabais: true, nouveauPrix: 0, vedette: true,
      hotel: {
        nom: '',
        coordonnees: '',
        nombreEtoiles: 0,
        nombreChambres: 0,
        description: '',
        caracteristiques: undefined,
        avis: ''
      }}
    } else {
      this.selectedForfait = tableauForfaits;
    }
    const dialogRef = this.dialog.open(DialogFormForfaitsComponent, {
      width: '500px',
      data: this.selectedForfait,
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.selectedForfait = undefined;
      this.getForfaits();
    }); 
  } 
}
