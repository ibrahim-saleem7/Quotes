import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  Quotes :any[] = [];
  page :number = 1
  faQuoteRight = faQuoteRight;

  constructor(private service : ServiceService){}

  ngOnInit(): void {
    this.allQuotes()
  }

  allQuotes(){
    this.service.getQuotes(this.page).subscribe((data:any) =>{
      this.Quotes = data["results"]
    })
  }

  Previous(){
    this.page--;
    this.service.getQuotes(this.page).subscribe((data:any) =>{
      this.Quotes = data["results"]
    });
  }

  Next(){
    this.page++;
    window.scrollTo({
      top: 0,
      left: 0 ,
      behavior: "smooth"
    })
    this.service.getQuotes(this.page).subscribe((data:any) =>{
      this.Quotes = data["results"]
    });
  }

  title = 'Quotes-app';

}
