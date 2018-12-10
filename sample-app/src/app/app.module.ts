import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampleTwoComponent } from './sample-two/sample-two.component';
import { SampleThreeComponent } from './sample-three/sample-three.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SampleTwoComponent,
    SampleThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
