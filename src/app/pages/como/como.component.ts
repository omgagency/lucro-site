import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-como',
  templateUrl: './como.component.html',
  styleUrls: ['./como.component.css']
})
export class ComoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    $(document).ready(function() {

      function goToByScroll(id) {
          // Remove "link" from the ID
          id = id.replace("link", "");
          // Scroll
          $('html,body').animate({
              scrollTop: $("#" + id).offset().top
          }, 'slow');
      }

      $('.slider_all').bxSlider();

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
