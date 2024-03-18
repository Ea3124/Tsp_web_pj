// http://localhost:3000/products/upload
"use client";
import { categories } from "@/components/categories/Categories";
import Container from '@/components/Container';
import React, { useState } from 'react'
import Heading from '@/components/Heading';
import ImageUpload from '@/components/ImageUpload';
import Input from '@/components/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/Button';

import CategoryInput from '@/components/categories/CategoryInput';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ProductUploadPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState : {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues : {
            title: '',
            description: '',
            category: '',
            latitude: 33.5563,
            longitude: 126.79581,
            imageSrc: '',
            price: 1
        }
    })

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value);
    }

    const imageSrc = watch('imageSrc');
    const category = watch('category');
    
    const router = useRouter();
    
    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/products', data)
        .then((response)=> {
            //router.push(`/products/${response.data.id}`)
            router.push('/')
        })
        .catch((err)=> {
            console.error(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }
    
    return (
        <Container>
            <div
                className='max-w-screen-lg mx-auto'
            >
                <form className='flex flex-col gap-8'
                    onSubmit={handleSubmit(onSubmit)}>
                    <Heading title='마이 페이지' 
                                subtitle='프로필'
                    />
                    <ImageUpload onChange={(value)=>
                                    setCustomValue('imageSrc', value)}
                                    value={imageSrc}
                    />
                    <Input id='title'
                            label='이미지변경(삭제)'
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required/>
                            <div className="flex flex-col items-center">
                            <p>ID : 20202020</p>
                            <p>Name : 탑스핀</p>
                            </div>
                            <hr/>
                    <Input id='description'
                            label='현재 비밀번호'
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required/>
                    <Input id='price'
                            label='새 비밀번호'
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required/>                              
                    <Button label="비밀번호 변경하기" isLoading={false}/>                        
                </form>
            </div>

        </Container>
  )
}

export default ProductUploadPage