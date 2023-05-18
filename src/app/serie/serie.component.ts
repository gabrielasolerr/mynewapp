import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})

export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];

  getSerieList() {
    this.serieService.getSeries().subscribe(series=> {
      this.series = series;
      console.log(this.series);
      this.getAverageSeasons();
    })
  }

  average: number = 0;
  getAverageSeasons() {
    let totalSeasons = 0;
    this.series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    this.average = totalSeasons / this.series.length;
  }

  ngOnInit() {
    this.getSerieList();
  }

}
