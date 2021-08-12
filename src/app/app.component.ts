import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lucro';

   constructor(private wowService: NgwWowService,private router: Router) {
    this.wowService.init();
  }



  
  ngOnInit() {

    
      this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
   

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
