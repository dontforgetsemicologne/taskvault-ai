import type { Signer } from "ethers";

export interface WalletData {
    address: string;
    signer: Signer;
}