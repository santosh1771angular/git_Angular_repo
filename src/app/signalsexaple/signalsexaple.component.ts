import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signalsexaple',
  imports: [],
  templateUrl: './signalsexaple.component.html',
  styleUrl: './signalsexaple.component.css'
})
export class SignalsexapleComponent implements OnInit {

  count = signal(0);
  price = signal(100);
  tax = signal(10);
  total = computed(() => this.price() + this.tax());

  ngOnInit(): void {
    console.log(this.count());
  }

  change() {
    this.price.update(p => p + this.count()); // example mutation function
    this.tax.update(t => t + this.count());   // example mutation function
    // 'total' stays computed automatically from price + tax
  }
 
 
  increment() {
    this.count.update(c => c + 1);
  }
  
  
  decrement() {
    this.count.update(c => c - 1);
  }
  

}
