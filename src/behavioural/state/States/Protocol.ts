export interface OrderState {
    approvePayment(): void
    refusePayment(): void
    shipOrder(): void
    cancelOrder(): void
}
