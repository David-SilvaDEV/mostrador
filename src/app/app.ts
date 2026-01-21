import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';
import { Header } from './components/header/header';
import { Body } from './components/body/body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Products, Header, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mostrador');
}
