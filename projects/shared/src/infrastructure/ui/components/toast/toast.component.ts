import { Component, inject, input, OnDestroy } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { Subject, Subscription, takeUntil, timer } from 'rxjs';
import { ToastService } from '../../../services/toast.service';
import { IToast } from '../../containers/toast-container/toast-container.component';




@Component({
  selector: 'lib-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  toastData = input<IToast | undefined>(undefined);
  show = input<boolean>(false);

}