import { Component } from '@angular/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [Products],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
