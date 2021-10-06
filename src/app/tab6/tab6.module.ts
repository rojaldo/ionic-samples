import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab6Page } from './tab6.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab6PageRoutingModule } from './tab6-routing.module';
import { ApodComponent } from '../components/apod/apod/apod.component';
import { DateApodComponent } from '../components/apod/date-apod/date-apod.component';
import { ShowApodComponent } from '../components/apod/show-apod/show-apod.component';
import { ApodService } from '../services/apod.service';
import { NativeComponent } from '../components/native/native.component';
import { TrivialComponent } from '../components/trivial/trivial.component';
import { CardComponent } from '../components/trivial/card/card.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab6Page }]),
    Tab6PageRoutingModule,
  ],
  declarations: [Tab6Page, TrivialComponent, CardComponent],
  providers: [],
})
export class Tab6PageModule {}
