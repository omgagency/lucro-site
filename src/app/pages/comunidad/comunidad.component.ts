import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import io from 'socket.io-client';



declare var $: any;

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {



  constructor( private httpService: HttpClient) { }

  arrTestimonios: string [];
  arrInfluencers: string [];
  arrCifras: string [];
  arrContenidos: string [];
  private socket;


  getMessages() {
    let observable = new Observable((observer) => {
      this.socket = io('https://analytics-streaming-5nre6opcba-uc.a.run.app', { transports: ['websocket'] });
      this.socket.on('get:app_counters', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }



  ngOnInit(): void {

    this.getMessages().subscribe((v) => console.log('SOCKET emmit: ', v));


    this.httpService.get('https://lucro.omgagency.co/servicios/contenidos.php?cat=comunidad').subscribe(
      data => {
        this.arrContenidos = data as string [];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.arrContenidos);
      },
      (err: HttpErrorResponse) => {
        //console.log (err.message);
      }
    );


    this.httpService.get('https://lucro.omgagency.co/servicios/testimonios.php').subscribe(
      data => {
        this.arrTestimonios = data as string [];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.arrTestimonios);
      },
      (err: HttpErrorResponse) => {
        //console.log (err.message);
      }
    );


    this.httpService.get('https://lucro.omgagency.co/servicios/influencers.php').subscribe(
      data => {
        this.arrInfluencers = data as string [];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.arrInfluencers);
      },
      (err: HttpErrorResponse) => {
        //console.log (err.message);
      }
    );


    this.httpService.get('https://lucro.omgagency.co/servicios/cifras.php').subscribe(
      data => {
        this.arrCifras = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrCifras);
      },
      (err: HttpErrorResponse) => {
        //console.log (err.message);
      }
    );

    $(document).ready(function() {

      

      setTimeout(function(){


        var slider = $('.slider_testimonios').bxSlider({

          auto: true,
          autoHover: true,
          pause: 5000,
          onSlideBefore: function(){
  
            $('.testimonio' ).removeClass('activo');
            var numero = parseInt(slider.getCurrentSlide())+1;
            $('.t'+  numero ).addClass('activo');
  
          }
  
        });
  
  
        $( ".testimonio" ).click(function( event ) {
          $( ".testimonio" ).removeClass("activo");
          var testimonio = $( this ).attr("data-link");
          $(this).addClass("activo");
          slider.goToSlide(testimonio);
        })




       }, 3000);

      
     

    });
  }

}
