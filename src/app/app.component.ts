import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lucro';

   constructor(private wowService: NgwWowService, private httpService: HttpClient,private router: Router) {
    this.wowService.init();
  }

  arrTestimonios: string [];

  ngOnInit() {


      this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });


          this.httpService.get('//69.195.80.181/lucro-admin/servicios/testimonios.php').subscribe(
            data => {
              this.arrTestimonios = data as string [];	 // FILL THE ARRAY WITH DATA.
              console.log(this.arrTestimonios);
            },
            (err: HttpErrorResponse) => {
              console.log (err.message);
            }
          );


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
