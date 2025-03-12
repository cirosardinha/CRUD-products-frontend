import { ProductService } from './../../services/product.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';
import { RouterLink, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, RouterModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product | null = null;
  @Output() productDeleted = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  deleteProduct(id: string): void {
    if (confirm('Tem certeza de que deseja excluir este produto?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.productDeleted.emit(id);
      });
    }
  }
}
