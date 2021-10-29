// import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { from, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class InterceptorService {

//   constructor() { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     return from(this.handleAccess(request, next));
//   }

//   private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    
//     const targetEndpoints = ['http://cryptocurrencypricedisplay-env.eba-wd56rraq.us-east-2.elasticbeanstalk.com/price'];

//     if (targetEndpoints.some(url => request.urlWithParams.includes(url))) {     

//         request = request.clone({
//           setHeaders: {
//             "Content-Security-Policy": "upgrade-insecure-requests"
//           }
//         });

//     }
//     return next.handle(request).toPromise();
//   }  
// }
