import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {

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
     

    });
  }

}
