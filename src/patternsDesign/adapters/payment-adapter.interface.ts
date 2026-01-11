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

export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';
  last4Digits?: string;
  expiryDate?: string;
}
