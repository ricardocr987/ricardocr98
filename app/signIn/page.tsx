'use client'
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Link from 'next/link'; 
import Image from 'next/image';

export default function Component() {
    const [email, setEmail] = useState('');
    
    const handleLogin = () => {
        console.log('handleLogin')
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
    };
    
    return (
        <div className='flex items-center justify-center h-full my-10 mx-12'>
            <div className="dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Login</h2>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2 mt-6">
                        <label htmlFor="email">
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            type="email"
                            required={true}
                        />                    
                    </div>
                    <div className="space-y-2 mt-6">
                        <label htmlFor="email">
                            Password
                        </label>
                        <Input
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            type="email"
                            required={true}
                        />                    
                    </div>
                    <div className="flex items-center space-x-2">
                        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" data-id="13" />
                        <span className="text-zinc-400 dark:text-zinc-300 text-sm" data-id="14">
                            OR
                        </span>
                        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" data-id="15" />
                    </div>
                    <Button className="w-full" onClick={handleLogin}>
                        <div className="flex items-center justify-center" data-id="17">
                            <Image src="/google-icon.svg" alt="Google" width={40} height={40} className='mr-6' />
                            Login with Google
                        </div>
                    </Button>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        By logging in, you accept our{' '}
                        <span>
                            <Link className="text-blue-500 hover:text-blue-700" href="#">
                            terms
                            </Link>
                        </span>{' '}
                        and{' '}
                        <span>
                            <Link className="text-blue-500 hover:text-blue-700" href="#">
                            privacy policy
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
