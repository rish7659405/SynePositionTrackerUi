import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { OpenPositionInterface } from '../Modals/openPositionInterface'
import { TableModule } from 'primeng/table';
import { MatSort, Sort } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material';
import { AccordionTemplate, AccordionData } from 'ngx-accordion-table';

//import {AccordionTemplate} from 'ngx-accordion-table'; 

@Component({
  selector: 'app-open-position-tracker',
  templateUrl: './open-position-tracker.component.html',
  styleUrls: ['./open-position-tracker.component.scss']
})
export class OpenPositionTrackerComponent implements OnInit {


  constructor(public dataservice: DataService) {
    /* this.accordionTemplate = OpenPositionTrackerComponent.buildTemplate();this.accordionData = OpenPositionTrackerComponent.addData(this.accordionTemplate);*/
  }
  open_positions: any = [];
  cols: any[];
  candidateName: string;
  submissions:any;
 map = new Map<String, Object>();

  ngOnInit() {
    this.loadEmployees();
    //console.log(this.open_positions);


    this.cols = [
      { field: 'syneOptId', header: 'Syne Opt Id' },
      { field: 'reqDate', header: 'Requisition Date' },
      { field: 'aging', header: 'Aging' },
      { field: 'hiringManager', header: 'Hiring Manager' },
      { field: 'priority', header: 'Priority' },
      { field: 'project', header: 'Project' },
      { field: 'lineOfBusiness', header: 'Line Of Business' },
      { field: 'roleCategory', header: 'Role Category' },
      { field: 'location', header: 'Location' },
      { field: 'role', header: 'Role' },
      { field: 'mustHaveSkills', header: 'Must Have Skills' },
      { field: 'experience', header: 'Experience' },
      { field: 'finalStatus', header: 'Final Status' },
      { field: 'clientSubmission', header: 'Client Submission' },
      { field: 'processing', header: 'Processing' },
      { field: 'bizOwner', header: 'Biz Owner' },
      { field: 'recruiterLead', header: 'Recruiter Lead' },
    ];
  }

  // Get employees list
  loadEmployees() {
    return this.dataservice.getOpenPositions().subscribe((data: {}) => {
      console.log(data);
      this.open_positions = data;
      // alert(  this.open_positions[0] );

    })

  }

  populateDetails(event) {
    let obj = this.open_positions.find(data => data.syneOptId === event.data.syneOptId);
    //this.submissions=[];
    if (!obj.candidates ) {
      return this.dataservice.getSubmissionsForPosition(event.data.syneOptId).subscribe((responseData: {}) => {
       // obj.candidates = responseData ? responseData : [];
       // this.map.set(obj.syneOptId,obj.candidates);
       // this.submissions=obj.candidates;
       // console.log(this.open_positions);
        //console.log(  obj.candidates);
        obj.candidates = responseData;
        sessionStorage.setItem("candidates", JSON.stringify(obj.candidates));
        console.log(this.open_positions);

      })
    }
   
  
  }

  populateDetails1(event)
  {alert(event);}

}


