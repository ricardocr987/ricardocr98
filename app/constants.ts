import { ConfirmOptions, Connection, PublicKey } from "@solana/web3.js";
import { TokenInfo } from "./meeting/page";

export const confirmOptions: ConfirmOptions = { commitment: "confirmed" };
export const connection = new Connection(process.env.RPC || process.env.NEXT_PUBLIC_RPC || "https://api.mainnet-beta.solana.com");

export const BRICK_PROGRAM_ID = 'BrickarF2QeREBZsapbhgYPHJi5FYkJVnx7mZhxETCt5'
export const BRICK_PROGRAM_ID_PK = new PublicKey(BRICK_PROGRAM_ID)

export const METADATA_PROGRAM_ID = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
export const METADATA_PROGRAM_ID_PK = new PublicKey(METADATA_PROGRAM_ID)

export const symbolFromMint: Record<string, string> = {
    'So11111111111111111111111111111111111111112': 'SOL',
    'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': 'USDC',
    'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So': 'MSOL',
    'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263': 'BONK',
}
export const mintFromSymbol: Record<string, string> = {
    'SOL': 'So11111111111111111111111111111111111111112',
    'USDC': 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    'MSOL': 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    'BONK': 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
}
export const decimalsFromPubkey: Record<string, number> = {
    'So11111111111111111111111111111111111111112': 9,
    'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': 6,
    'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So': 9,
    'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263': 5,
}

export const imagesPathFromSymbol: Record<string, string> = {
    'SOL': '/solanaLogo.svg',
    'USDC': '/usdcLogo.svg',
}


export function changeTokenInfo(price: number, symbol: string): TokenInfo {
    return ({
        symbol: symbol,
        image: imagesPathFromSymbol[symbol],
        price 
    })
}