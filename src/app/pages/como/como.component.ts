import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-como',
  templateUrl: './como.component.html',
  styleUrls: ['./como.component.css']
})
export class ComoComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  arrContenidos: string [];
  arrBanners: string [];


  ngOnInit(): void {

    this.httpService.get('https://lucro.omgagency.co/servicios/contenidos.php?cat=como').subscribe(
      data => {
        this.arrContenidos = data as string [];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.arrContenidos);
      },
      (err: HttpErrorResponse) => {
        //console.log (err.message);
      }
    );

    this.httpService.get('https://lucro.omgagency.co/servicios/banners.php').subscribe(
      data => {
        this.arrBanners = data as string [];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.arrBanners);
      },
      (err: HttpErrorResponse) => {
        //console.log (err.message);
      }
    );


    $(document).ready(function() {

      function goToByScroll(id) {
          // Remove "link" from the ID
          id = id.replace("link", "");
          // Scroll
          $('html,body').animate({
              scrollTop: $("#" + id).offset().top
          }, 'slow');
      }

      setTimeout(function(){

       $('.slider_all').bxSlider();

    }, 3000);

      $( ".tabs_content .nav-link" ).click(function( event ) {
            event.preventDefault();
            var color = $(this).attr('data-class');
            $('.tabs_content').attr('data-color',color );
      });

      $( ".bola" ).click(function() {


            var tab = $(this).attr('data-tab');

            goToByScroll("tabsContent");

            $('#'+tab+'-tab').click();
            $('.nav-tabs button[data-bs-target="#' + tab + '"]').tab('show');
      });

     

    });




  }

}
