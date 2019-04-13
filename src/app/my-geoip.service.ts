import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGeoipService {
  findGeoIp(ipAddress: string) {
    return ipAddress + ' generated value';
  }

  constructor() { }
}
