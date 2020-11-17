import { Component, OnInit } from '@angular/core';
import {BackendApisService} from "../backend-apis.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  rows = []
  name:string = ''
  visible = true;

  nameSub:any;

  constructor(private backendApisService:BackendApisService) {
  }

  ngOnInit(): void {
    this.nameSub = this.nameSubscription()
  }

  nameSubscription(){
    return this.backendApisService.responseUpdated.subscribe((res: string) => {
      this.name = res
      console.log(res)
    })
  }

  pressed(): void {

    console.log("I'm about to call the API")

    this.backendApisService.getHello()

    console.log("I called it")


  }

}
