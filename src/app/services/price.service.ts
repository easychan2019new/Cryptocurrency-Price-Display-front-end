import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticker } from '../common/ticker';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private url = `http://localhost:8080/price/tickers/all`;

  constructor(private httpClient: HttpClient) { }

  getTicker(): Observable<Ticker>{
    return this.httpClient.get<Ticker>(this.url);
  }
}
