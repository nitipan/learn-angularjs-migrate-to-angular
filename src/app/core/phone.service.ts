import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as phone_data from '../data/phones/phones.json';

@Injectable()
export class PhoneService {
    constructor(private http: HttpClient) {

    }
    query() {
        return phone_data;
    }
}
