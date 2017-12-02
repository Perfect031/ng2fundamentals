import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app-component';
import { ProductComponent } from './products/products-app-component';

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, ProductComponent],
    bootstrap: [EventsAppComponent]
})


export class AppModule{

}