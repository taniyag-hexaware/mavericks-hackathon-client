import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  getApi : string ='https://mavericks-hackathon-aquila.herokuapp.com/api/models/';
  getByModelId : string ='https://mavericks-hackathon-aquila.herokuapp.com/api/model/modelId';
  getByCategory : string ='https://mavericks-hackathon-aquila.herokuapp.com/api/model/category'
  constructor(private http: HttpClient) {}

  public getModel() : Observable<any>{
   
      return this.http.get<any>(this.getApi); 
    
   }
   public getModelByID(id : string) : Observable<any>{
   
      return this.http.get<any>(this.getByModelId+ '/' + id ); 
    
   }
   public getModelByCategory(category : string) : Observable<any>{
   
      return this.http.get<any>(this.getByCategory+ '/' + category ); 
    
   }

}
