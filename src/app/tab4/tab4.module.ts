import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab4-routing.module';
import { BeersComponent } from '../components/beers/beers/beers.component';
import { BeersService } from '../services/beers.service';
import { AbvPipe } from '../pipes/abv.pipe';
import { ApodComponent } from '../components/apod/apod/apod.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab4Page, ApodComponent],
  providers: [BeersService],
})
export class Tab4PageModule {}
