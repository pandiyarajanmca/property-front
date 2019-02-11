import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  api_key = 'dfgdfgdfg';

  constructor(private http:HttpClient) { }
  initSources() {
     return this.http.get('http://localhost:4001/api/v1/seller/properties/1/10');
  }
  initArticles() {
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }
  getArticlesByID(source: String) {
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
  create() {
  let body =  {
      'city': 'Dubai',
      'locality': 'IMPS',
      'address': 'Crecent Tower',
      'numberOfBathrooms': '2',
      'numberOfBedrooms': '2',
      'numberOfRooms': '3',
      'livingArea': '3000',
      'email': 'pandiyarajan@snow.com'
    };

    console.log(body);
     this.http.post('http://localhost:4001/api/v1/seller/property', body ).subscribe(data => {
       console.log(data);
     });
   }


}
