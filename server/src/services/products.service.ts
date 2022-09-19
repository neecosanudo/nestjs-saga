import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Injectable()
export class ProductsService {
  /**
   * Local ID counter.
   */
  private counterId = 1;

  /**
   * Fake local database.
   */
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

  /**
   * Get all products.
   * @returns Array with products.
   */
  findAll() {
    return this.products;
  }

  /**
   * Get one product by ID.
   * @param id Number.
   * @returns The required product.
   */
  findOne(id: number) {
    // Find product or throw error response.
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  /**
   * Create a new product.
   * @param payload CreateProductDto.
   * @returns The new created product.
   */
  create(payload: CreateProductDto) {
    // Update local ID counter.
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  /**
   * Update a product by ID.
   * @param id Number.
   * @param payload UpdateProductDto.
   * @returns The updated product.
   */
  update(id: number, payload: UpdateProductDto) {
    // Get current product and its index, or throw error response.
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

  /**
   * Delete a product by ID.
   * @param id Number.
   * @returns Boolean: true.
   */
  delete(id: number) {
    // Get current product index or throw error response.
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.products.splice(productIndex, 1);

    return true;
  }
}
