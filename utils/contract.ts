import {
    Signer, 
    Contract,
    JsonRpcProvider,
    BrowserProvider
} from "ethers";
import { CONTRACT_ABI } from "@/data";
import { WalletData } from "@/types/contract";

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;

export const getContract = async (signer: Signer): Promise<Contract> => {
    return new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
}

export const getProvider = (): JsonRpcProvider => {
    return new JsonRpcProvider('https://indulgent-muddy-flower.matic-amoy.quiknode.pro/f1f499d6eef6e74d9fa372580c0f8cf8c47c01ee');
}

export const connectWallet = async (): Promise<WalletData> => {
    if(!window.ethereum) {
        throw new Error('No Ethereum object.');
    }

    try {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        }) as string[];

        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        return { address: accounts[0], signer }
    } catch(error) {
        throw new Error(`Failed to connect wallet: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}