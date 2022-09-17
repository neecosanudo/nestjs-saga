import { Injectable } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description',
      price: 122,
      stock: 10,
      image: 'url',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const found = this.products.findIndex((item) => item.id === id);
    if (found === -1) throw new Error('Product not found');
    this.products[found] = {
      ...this.products[found],
      ...payload,
    };
    return {
      message: 'Product updated',
      product: this.products[found],
    };
  }

  delete(id: number) {
    const productFound = this.products.findIndex((item) => item.id === id);
    if (productFound > 0) {
      this.products.splice(productFound, 1);
      return {
        message: `Product with ID: ${id} deleted`,
      };
    }
    return {
      message: 'Product not found',
    };
  }
}
