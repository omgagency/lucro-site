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

      $('.slider_all').bxSlider();

      $( ".tabs_content .nav-link" ).click(function( event ) {
            event.preventDefault();
            var color = $(this).attr('data-class');
            $('.tabs_content').attr('data-color',color );
      });

    });




  }

}
