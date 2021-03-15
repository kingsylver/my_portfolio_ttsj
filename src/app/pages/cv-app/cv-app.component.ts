import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-app',
  templateUrl: './cv-app.component.html',
  styleUrls: ['./cv-app.component.scss']
})
export class CvAppComponent implements OnInit {

  pdfSrc:any =  "../assets/media/base64/CV_Tchatchou_Silvere.pdf";

  isHide=true;

  constructor() { }

  ngOnInit(): void {
  }

}
