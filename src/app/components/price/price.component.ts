import { Component, OnInit } from '@angular/core';
import { Ticker } from 'src/app/common/ticker';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  ticker: Ticker = new Ticker;
  time: Date;
  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
    this.getTickers();
  }

  refresh() {
    location.reload();
    console.log(new Date);
  }

  getTickers() {
    
    this.priceService.getTicker().subscribe(
      data => {
        this.ticker = data;
      }
    )
    this.time = new Date();
  }

}
