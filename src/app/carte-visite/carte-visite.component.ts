import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css',
              './pe-icon-7-stroke.css',
              './rotating-card.css'
              ]
})
export class CarteVisiteComponent implements OnInit {

  nomForm:string="";
  PrenForm:string="";
  JobForm:string="";
  CitationForm:any="";
  DescrTravailForm:any="";
  keyWords:any="";
  url_image;

  constructor() { }

  ngOnInit(): void {
  }

  onFolderSelected(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url_image = event.target.result;
      }
    }
}

}
