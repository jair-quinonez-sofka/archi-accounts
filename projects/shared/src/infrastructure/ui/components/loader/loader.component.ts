import { Component, input, OnDestroy } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent{

  showLoader = input<boolean>(false);

}
