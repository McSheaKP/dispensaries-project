import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, scheduled } from 'rxjs';
import { IDispensaryBackend } from './dispenary-backend.types';
//import { IDispensaryClient } from './dispensary-client.types';


@Injectable({
  providedIn: 'root'
})
export class DispenariesDashboardApiService {

  private apiUrl = 'assets/dispensaries.json'
  constructor(private http: HttpClient) {}

  // getLineItem(): Observable<PurchaseOrderLineItem> {
  //   return this._http
  //     .get<PurchaseOrderLineItemBackend>(`${this.apiBase}/${id}`)
  //     .pipe(
  //       map((resp: PurchaseOrderLineItemBackend) =>
  //         PurchaseOrderLineItem.fromBackend(resp)
  //       ),
  //       share() // make hot to avoid multiple subscriptions creating multiple requests
  //     );
  // }
  getItems(): Observable<any> {
    return this.http.get<IDispensaryBackend[]>(this.apiUrl)
    // .pipe(
    //   map((dispensaryList: IDispensaryBackend[]) => {

    //     dispensaryList.map((dispensary: IDispensaryBackend) => {
    //       console.log(typeof dispensary.Menu)
    //       console.log('dispensary',dispensary)
    //       console.log(dispensary.Menu)
    //       console.log(dispensary.Menu.length)
    //       // if(dispensary.Menu.length > 2){
    //       //   const convetedData = this.convertToJSON(dispensary.Menu)  
    //       //   console.log('CONVERTED DATA: ',convetedData)
    //       //   console.log(dispensary.Menu)        
    //       // }
          
         
    //     })
    //   })
    //)
  }
}
