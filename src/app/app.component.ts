import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lucro';

   constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit() {

       $(document).ready(function() {


              $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                //>=, not <=
                if (scroll >= 500) {
                    //clearHeader, not clearheader - caps H
                    $(".navbar").addClass("header_scroll");
                }
            }); //missing );
     

            $( ".menu_link, .navbar-brand" ).click(function( event ) {
            	event.preventDefault();
		      	});

            


       });

    }

}
