import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CalculatorComponent } from '../components/calculator/calculator/calculator.component';
import { DisplayComponent } from '../components/calculator/display/display.component';
import { KeyboardComponent } from '../components/calculator/keyboard/keyboard.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, CalculatorComponent, DisplayComponent, KeyboardComponent]
})
export class Tab1PageModule {}
