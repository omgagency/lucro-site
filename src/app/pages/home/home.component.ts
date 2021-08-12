import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  arrContenidos: string [];

  ngOnInit(): void {

    this.httpService.get('https://lucro.omgagency.co/servicios/contenidos.php?cat=home').subscribe(
      data => {
        this.arrContenidos = data as string [];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.arrContenidos);
      },
      (err: HttpErrorResponse) => {
        //console.log (err.message);
      }
    );


  }

}
