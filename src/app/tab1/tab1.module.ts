import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HeaderModule } from '../header/header.module';
import { ButtonModule } from '../button/button.module';
import { PlayerModule } from '../player/player.module';
import { Tab1Service } from './tab1.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HeaderModule,
    ButtonModule,
    PlayerModule,
    
  ],
  declarations: [Tab1Page],
  providers:[Tab1Service],
})
export class Tab1PageModule {}
