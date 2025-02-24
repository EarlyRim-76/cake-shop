import { Component } from '@angular/core';
import { CakeShopComponent } from "./features/feature-cake-shop/components/cake-shop/cake-shop.component";
import { CakeHeaderComponent } from "./layouts/cake-header/cake-header.component";

@Component({
  selector: 'app-root',
  imports: [CakeShopComponent, CakeHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cake-shop';
}
