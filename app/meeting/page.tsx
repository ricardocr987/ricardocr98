'use client'
import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import TimeInfo from "../components/TimeInfo";
import { changeTokenInfo } from "../constants";

// data from db
const tokenList: TokenInfo[] = [
    {
        symbol: 'USDC',
        image: './usdcLogo.svg',
        price: 1
    },
    {
        symbol: 'SOL',
        image: './solanaLogo.svg',
        price: 2
    }
];
// api should return only avialble times of that specific date
// of the current month, when the month change is needed to update this
const availableHours: number[] = [
    9, 12, 13, 17
];

export type DateProps = {
    year: number
    month: number
    day?: number
    hours: number[]
}

export type TokenInfo = {
    symbol: string
    image: string
    price: number
}

export default function meeting() {
    const [selectedToken, setSelectedToken] = useState<TokenInfo>(
        changeTokenInfo(tokenList[0].price, tokenList[0].symbol)
    );
    const currentDate = new Date();
    const [date, setDate] = useState<DateProps>({
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
        day: currentDate.getDate() +  1,
        hours: []
    });

    useEffect(() => {
        setDate({ ...date, hours: [] });
    }, [date.day, date.month]);
    
    return (
        <div className="flex items-center justify-center py-8 px-4">
            <div className="max-w-xl w-full shadow-lg">
                <Calendar date={date} setDate={setDate}/>
                <div className="py-5 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                    <TimeInfo 
                        date={date} 
                        setDate={setDate}
                        availableHours={availableHours} 
                        selectedToken={selectedToken} 
                        setSelectedToken={setSelectedToken}
                        tokenList={tokenList}
                    />
                </div>
            </div>
        </div>
    )
}