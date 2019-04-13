import { Component, OnInit } from '@angular/core';
import { MyGeoipService } from './my-geoip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-with-geoip-lite';
  ipAddress: string;
  geoIpValue: string;

  constructor(private myGeoIpService: MyGeoipService) {

  }

  ngOnInit() {

  }

  findGeoIp() {
    this.geoIpValue = this.myGeoIpService.findGeoIp(this.ipAddress);
  }
}
