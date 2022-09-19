import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

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
      image: 'http://www.localhost:3000/img/products',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.products[productIndex] = {
      ...product,
      ...payload,
    };

    return this.products[productIndex];
  }

  delete(id: number) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.products.splice(productIndex, 1);

    return true;
  }
}
