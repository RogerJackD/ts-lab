export interface IPaymentGateway {
  processPayment(amount: number, currency: string): Promise<PaymentResult>;
  refund(transactionId: string): Promise<RefundResult>;
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
  message: string;
}

export interface RefundResult {
  success: boolean;
  refundId: string;
}