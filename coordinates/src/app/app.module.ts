import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { AppRoutingModule } from './app-routing.module';
import { OutputComponent } from './output/output.component';
import { BoxService } from './box.service';
import { FormsModule } from '@angular/forms';
import { BoxCoordinatesPipe } from './box-coordinates.pipe';
import { CreateBoxComponent } from './create-box/create-box.component';
import { DisplayboxComponent } from './displaybox/displaybox.component';

@NgModule({
  declarations: 
    [ AppComponent, 
      InputComponent, 
      OutputComponent, 
      BoxCoordinatesPipe, 
      CreateBoxComponent, DisplayboxComponent
    ],
  imports: 
    [ BrowserModule,
      AppRoutingModule,
      FormsModule
    ],
  providers: [BoxService], 
  bootstrap: [AppComponent]
})

export class AppModule {}
