import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ICake } from '../../model/cake.interface';
import { CakeShopService } from '../../services/cake-shop.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-cake-shop',
  imports: [MatCardModule],
  templateUrl: './cake-shop.component.html',
  styleUrl: './cake-shop.component.scss'
})
export class CakeShopComponent implements OnInit {
  
  cakeService = inject(CakeShopService);
  cdr = inject(ChangeDetectorRef);

  cakes : ICake[] = []


  ngOnInit(): void {
    this.getAllCakes()
  }

  getAllCakes(){
    this.cakeService.getAllCake().subscribe({
      next: (res:any) => {
        console.log(res);
        this.cakes = res
        this.cdr.detectChanges();
      },error: (error :any) => {
          console.log("Error request", error);
      },complete: () => {
        console.log("Completed request");
      }
    })
  }

}
