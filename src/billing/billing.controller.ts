import { Body, Controller, Get, Post } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing';
import { Billing } from './schemas/billing.schema';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  async create(@Body() createBillingDto: CreateBillingDto) {
    await this.billingService.create(createBillingDto);
  }

  @Get()
  async findAll(): Promise<Billing[]> {
    return this.billingService.findAll();
  }
}
