import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBillingDto } from './dto/create-billing.dto';
import { Billing } from './schemas/billing.schema';

@Injectable()
export class BillingService {
  constructor(@InjectModel(Billing.name) private readonly billingModel: Model<Billing>) {}

  async create(createBillingDto: CreateBillingDto): Promise<Billing> {
    const createdBilling = new this.billingModel(createBillingDto);
    return createdBilling.save();
  }

  async findAll(): Promise<Billing[]> {
    return this.billingModel.find().exec();
  }
}
