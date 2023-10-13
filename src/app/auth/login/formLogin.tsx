"use client"
import { useState } from "react";
import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormHelperText,
    Input,
    InputGroup,
    InputLeftElement,
    chakra,
    Text,
    VStack,
    HStack,
    useToast
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLogin } from "@/model/userLogin";
import { useForm } from "react-hook-form";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import Link from "next/link";
import { signIn } from "next-auth/react";



const CFauserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


const FormLogin = () => {
    const schema = yup.object().shape({
        email: yup.string().required('Please enter your valid email').label('Email'),
        password: yup.string().min(8).max(32).required('Please enter your valid password').label('Password')
    });
    const defaultValueForms: userLogin = {
        email: "",
        password: ""
    };
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ defaultValues: defaultValueForms, mode: 'onBlur', resolver: yupResolver(schema) })

    // Handling animation
    const [loadingButton, setLoadingButton] = useState(false)
    const toast = useToast();
    const submitLogin = async (f: userLogin) => {
        setLoadingButton(true)
        try {
            const result = await signIn("credentials", {
                email: f.email,
                password: f.password,
                redirect: false
            })
            console.log(result)
            if (!result?.error) {
                setLoadingButton(false)
                document.location = '/auth/postLogin';
            } else {
                setLoadingButton(false);
                toast({
                    title: result.error,
                    status: 'error',
                    duration: 3000,
                    isClosable: true
                })
            }
        } catch (error: any) {
            setLoadingButton(false)
            toast({
                title: error,
                status: 'error',
                duration: 9000,
                isClosable: true
            })
        }
    };

    return (
        <>
            <Card >
                <CardBody>
                    <VStack>
                        <FormControl isInvalid={"email" in errors}>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<CFauserAlt color='gray.500' />} />
                                <Input placeholder="Email" type="email" {...register("email")} backgroundColor={'white'} />
                            </InputGroup>
                            <FormHelperText color={"red.400"}>{errors.email?.message}</FormHelperText>
                        </FormControl>
                        <FormControl isInvalid={"password" in errors}>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<CFaLock color="gray.500" />} />
                                <Input placeholder="Password" type="password" {...register("password")} backgroundColor={'white'} />
                            </InputGroup>
                            <FormHelperText color={"red.400"}>{errors.password?.message}</FormHelperText>
                            <FormHelperText textAlign="right">
                                <Link href={'/auth/login'} className="text-blue-500 hover:underline text-sm">Lupa Password?</Link>
                            </FormHelperText>
                        </FormControl>
                    </VStack>
                    <br />
                    <VStack spacing={2}>
                        <Button bg={'blue.600'} color={"white"} w={"100%"} h={10} onClick={handleSubmit(submitLogin)} isLoading={loadingButton} className="hover:bg-blue-900">Masuk</Button>
                        <Text className="text-black font-semibold">ATAU</Text>
                        <Button bg={'gray.200'} variant={'outline'} w={"100%"} h={10} leftIcon={<FcGoogle />}>Masuk dengan Google</Button>
                    </VStack>
                    <br />
                    <Text className="text-black text-sm">Belum punya akun?<Link href={'/auth/registration'} className="text-blue-500 hover:underline right-10"> Daftar</Link></Text>
                </CardBody>
            </Card>
        </>
    )
};

export default FormLogin;