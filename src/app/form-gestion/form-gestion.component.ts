import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forfaits } from '../forfaits';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-form-gestion',
  templateUrl: './form-gestion.component.html',
  styleUrls: ['./form-gestion.component.css']
})
export class FormGestionComponent implements OnInit {
  @Input() forfait: Forfaits = {
    id: '', region: '', destination: '', villeDepart: '', dateDepart: '', duree: '', prix: 0, rabais: 0, affichageRabais: true, nouveauPrix: 0, vedette: true,
    hotel: {
      nom: '',
      coordonnees: '',
      nombreEtoiles: 0,
      nombreChambres: 0,
      description: '',
      caracteristiques: undefined,
      avis: ''
    }
  }
  @Output() majTableau = new EventEmitter();
  
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
  }

  onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      if (this.forfait.id != null && this.forfait.id != '') {
        
        this.forfaitService.editForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });

      } else { 
        
        this.forfaitService.addForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });
      }
    }
      
  }

  onCancel() { 
    this.majTableau.emit();
  }
}
