import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginLayoutComponent } from "../login-layout/login-layout.component";

@Component({
  selector: 'lib-main-layout',
  imports: [RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
