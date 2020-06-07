import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   data1:any[]=new Array();
  info:any;
  test:Observable<any>;
  name;
  username;
  email;
  percent;


   public data12:Object[];
   public chartlable:Object;
   public legend:Object;
   public tooltip:Object;





  constructor(private serivice:DataService) {
    this.info=this.serivice.getAll().subscribe ( async(data)=>{this.info=data;this.test=this.info;
      var k=0;
      var m=0;
      var p=0;
      var l=0;
      this.percent=(this.info.length/100)*100;
      for(let i=0;i<(this.info.length);i++){
      if(0<this.test[i].address.geo.lat){
        k=k+1;
      }
      if(0>this.test[i].address.geo.lat) {
        m=m+1;
      }
      if(0<this.test[i].address.geo.lng){
        p=p+1;
      }
      if(0>this.test[i].address.geo.lng){
        l=l+1;
      }
      if(i==9){

 var pieCh={
      name:'Latitude > 0',
      greatLat:k
    };

     var pieCh1={
      name:'Latitude < 0',
      greatLat:m
    }

    var pieCh2={
      name:'Longitude > 0',
      greatLat:p
    }

    var pieCh3={
      name:'Longitude < 0',
      greatLat:l
    }
    this.data1.push(pieCh);
  this.data1.push(pieCh1);
  this.data1.push(pieCh2);
  this.data1.push(pieCh3);

  console.log(this.data1);
this.data12=await this.data1;


      }
      }

    });
    this.chartlable={
      visible:true,
      position:'Inside',
      name:'greatLat'
    }
    this.legend={
      visible:true,
      position:'Bottom',
      name:'name',
      height:'8%',
      width:'70%'
    }
    this.tooltip={
      enable:true,
      format:'<b>${point.x}=${point.y}%</b>'
    }

   }
   display(data){
     this.name=data.name;
     this.username=data.username;
     this.email=data.email;

   }


  ngOnInit(): void {

  }

}
