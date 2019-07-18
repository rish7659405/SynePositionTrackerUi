import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenPositionTrackerComponent } from './open-position-tracker/open-position-tracker.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import {TableModule} from 'primeng/table';
import { MatListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAccordionTableModule } from 'ngx-accordion-table';
import {AccordionModule} from 'primeng/accordion';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { NgxAccordionTableModule } from 'ngx-accordion-table';  
import { NgZone } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component'
import {MatStepperModule, MatInputModule, MatButtonModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OpenPositionTrackerComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    AccordionModule,
    BrowserAnimationsModule,  MatStepperModule, MatInputModule, MatButtonModule,
    FormsModule,
    ReactiveFormsModule
 
     
  ],
  providers: [DataService],
  bootstrap: [AppComponent,OpenPositionTrackerComponent,StepperComponent ]
  
})
export class AppModule { }
