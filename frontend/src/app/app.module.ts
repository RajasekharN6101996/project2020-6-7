import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule}from '@angular/forms';
import {HttpClientModule}from'@angular/common/http'
import {AccumulationChartModule,PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService} from '@syncfusion/ej2-angular-charts';

import { DataService } from './services/data.service';
import { DetailsComponent } from './components/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccumulationChartModule
  ],
  providers: [DataService,PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
