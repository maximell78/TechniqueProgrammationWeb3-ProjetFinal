import { Component, OnInit } from '@angular/core';
import { ChartType, ChartData } from 'chart.js';
import { ForfaitService } from '../forfait.service';
import { MeteoService } from '../meteo.service'
import { Meteo } from '../meteo';
import { Forfaits } from '../forfaits';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  tableauForfaits: Forfaits[] = [];
  tableauMeteo: Meteo[] = [];

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins: [],
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
  };

  public monData: ChartData<'bar'> = {
    labels: [
      { data: this.tableauForfaits.map(a => a.destination), label: 'Destination'}
    ],
    datasets: [
      { data: this.tableauMeteo.map(m => m.temperature), label: 'Temperature' },
      { data: this.tableauMeteo.map(m => m.tempRessenti), label: 'Temprature Ressenti' }
    ]
  };

  constructor(private forfaitService: ForfaitService,private meteoService: MeteoService) { }
  
  ngOnInit(): void {
    this.getForfaits();
    this.getMeteo();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.tableauForfaits = resultat)
  }

  getMeteo(): void {
    this.meteoService.getMeteo()
      .subscribe(resultat => this.tableauMeteo = resultat)
  }
}