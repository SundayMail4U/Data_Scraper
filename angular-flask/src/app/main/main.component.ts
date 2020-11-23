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

  twitterPressed(): void {

    console.log("I'm about to call Twitter API")

    this.backendApisService.getTwitterAPI()

    console.log("I called it")
  }

  redditPressed(): void {

    console.log("I'm about to call the Reddit backend code")

    this.backendApisService.getRedditAPI()

    console.log("I called it")
  }

}
