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

    });




  }

}
