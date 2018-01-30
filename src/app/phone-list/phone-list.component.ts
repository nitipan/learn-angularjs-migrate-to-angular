import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../core/phone.service';

@Component({
    selector: 'app-phone-list',
    templateUrl: 'phone-list.component.html'
})

export class PhoneListComponent implements OnInit {
    phones: any;

    constructor(private phoneService: PhoneService) { }

    ngOnInit() { this.phones = this.phoneService.query(); }

}
