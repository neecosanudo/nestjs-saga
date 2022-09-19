import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customer.dto';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Customer 1',
      email: 'one@customer.com',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId += 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };

    this.customers.push(newCustomer);

    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    if (customerIndex === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    this.customers[customerIndex] = {
      ...customer,
      ...payload,
    };

    return this.customers[customerIndex];
  }

  delete(id: number) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    if (customerIndex === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    this.customers.splice(customerIndex, 1);

    return true;
  }
}
