import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimerService } from './TimerService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule, BusyConfig } from 'angular2-busy';

@NgModule({
    imports: [BrowserAnimationsModule, BusyModule.forRoot(new BusyConfig({
        
        message: 'Time is running out!',
        backdrop: false,
        template: `<div style="text-align:center;position:absolute;font-size:26px;z-index: 100;width:250px;text-shadow:1px 1px 2px white, -1px -1px 2px white,-4px 4px 4px white,-4px 4px 4px white">{{message}}</div>`,
        delay: 200,
        minDuration: 600,
        wrapperClass: 'my-class'
    }))],
    declarations: [AppComponent],
    providers: [TimerService],
    bootstrap: [AppComponent]
})
export class AppModule { }