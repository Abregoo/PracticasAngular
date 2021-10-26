import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'

})

export class HeaderComponent{
    constructor(){
        console.log('Saludos desde header component');
    }


}