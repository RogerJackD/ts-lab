import Stripe from 'stripe';
import { IPaymentGateway, PaymentResult, RefundResult } from './payment-adapter.interface';

export class StripePaymentAdapter implements IPaymentGateway {
  private stripe: Stripe;

  constructor(apiKey: string) {
    this.stripe = new Stripe(apiKey, { apiVersion: '2023-10-16' });
  }

  async processPayment(amount: number, currency: string): Promise<PaymentResult> {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: amount * 100,
      currency,
    });

    return {
      success: paymentIntent.status === 'succeeded',
      transactionId: paymentIntent.id,
      message: paymentIntent.status,
    };
  }

  async refund(transactionId: string): Promise<RefundResult> {
    const refund = await this.stripe.refunds.create({
      payment_intent: transactionId,
    });

    return {
      success: refund.status === 'succeeded',
      refundId: refund.id,
    };
  }
}