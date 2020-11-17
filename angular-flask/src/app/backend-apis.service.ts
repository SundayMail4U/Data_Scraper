import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendApisService {

  constructor(private http:HttpClient) { }

  response:string = ''
  responseUpdated:EventEmitter<string> = new EventEmitter<string>()

  getHello():Promise<any>{
    console.log("About to")
    return this.http.get('/auth',{responseType: 'text'}).
    toPromise()
      .then(response => {
        this.response = response as string
        this.responseUpdated.emit(this.response)
      })
    console.log("Called API")
  }
}
