import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-wing-view',
  standalone: true,
  imports: [],
  templateUrl: './wing-view.component.html',
  styleUrl: './wing-view.component.css'
})
export class WingViewComponent implements AfterViewInit {
  @ViewChild('plotlyChart') chartElement!: ElementRef;

  constructor(){}

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const data: Partial<Plotly.PlotData>[] = [
      {
        x: [1, 2, 3, 4, 5],
        y: [10, 15, 13, 17, 10],
        type: 'scatter'
      }
    ];

    const layout = {
      title: 'Sample Plotly Chart'
    };
    // console.log(this.chartElement)
    Plotly.newPlot(this.chartElement.nativeElement, data, layout);

  }
}
