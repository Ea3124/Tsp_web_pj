// http://localhost:3000/auth/login
'use client'
import Button from '@/components/Button';
import Input from '@/components/Input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import '../../globals.css';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } =
        useForm<FieldValues>({
            defaultValues: {
                stnum: '',
                password: ''
            }
        });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<FieldValues> = async (body) => {
        setIsLoading(true);
        try {
            const data = await signIn("credentials", body);
        } catch (error) {
            console.log('[LoginPage] Login Error', error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className='bg-custom-blue'>
            <div className=''>
                <div className='absolute'>

                </div>
                <section className='flex flex-col items-center justify-center h-screen'>
                <p className='shadow-text'>TOP SPIN</p>

                    <br/>
                    <br/>
                    <form className='flex flex-col items-center justify-center gap-4 min-w-[350px]' onSubmit={handleSubmit(onSubmit)}>
                        
                        <Input
                            id="stnum" //?
                            label="ID"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                        />
                        <Button
                            label="로그인"
                            isLoading={isLoading}
                        />

                        <div className='text-center'>
                            <p className='text-gray-400'>
                                회원이 아니시면 ? {" "}
                                <Link href='/auth/register' className='text-black hover:underline'>
                                    가입
                                </Link>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default LoginPage