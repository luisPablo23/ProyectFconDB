import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  chartOptions: any = {
    title: {
      text: 'Estadísticas de Servicios Solicitados'
    },
    data: [
      {
        type: 'column', // Tipo de gráfico: columna
        dataPoints: [
          { label: 'Reparación de Hardware', y: 50 },
          { label: 'Instalación de Software', y: 30 },
          { label: 'Mantenimiento Preventivo', y: 20 },
          { label: 'Limpieza de Virus', y: 40 },
          { label: 'Optimización del Sistema', y: 35 }
        ]
      }
    ]
  };
}
