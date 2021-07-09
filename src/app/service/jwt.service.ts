import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { GetDateService } from './get-date.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private getDate: GetDateService,
              ) { }

  tokenDecode(): any{
    const helper = new JwtHelperService();
    let data = this.getDate.dataLogin
    let dataJson = JSON.stringify({ data });
    const decodedToken = helper.decodeToken(dataJson);
    // console.log("Token decode jwt service----", decodedToken);
    return decodedToken
  }

  getToken(): String{
    return localStorage.getItem('token');
  }


}
