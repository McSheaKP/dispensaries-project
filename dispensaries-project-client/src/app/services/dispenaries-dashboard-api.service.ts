import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Dispensary } from './dispenaries.types';


@Injectable({
  providedIn: 'root'
})
export class DispenariesDashboardApiService {

  private apiUrl = 'assets/dispensaries.json'
  constructor(private http: HttpClient) {}

  getItems(): Observable<Dispensary[]> {
    return this.http.get<Dispensary[]>(this.apiUrl)
   
    
  }
}

// Function to convert the data string to JSON
const convertToJSON = (data: Dispensary[]) => {
  console.log(data)

  // Replace `=` with `:` to make it JSON-like
  // data = data.Menu.replace(/=/g, ':');

  // // Convert the string to a JSON object
  // const jsonData = JSON.parse(data);

  return data;
};

