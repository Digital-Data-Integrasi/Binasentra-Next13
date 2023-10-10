"use client"
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
    CardHeader,
    FormLabel
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaUserAlt, FaLock, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { userRegis } from "@/model/userRegistration";

const CFauserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaPhone = chakra(FaPhone);
const AMail = chakra(AiOutlineMail);

const FormRegis = () => {
    const schema = yup.object().shape({
        username: yup.string().required('Please enter your username').label('username'),
        email: yup.string().required("Please enter your email").label('username'),
        password: yup.string().required('Please enter your password').min(8).max(32).label('password'),
        confirmPassword: yup.string().required('Please enter your confirm password').oneOf([yup.ref('password')], 'Your Password doesn"t match').label('confirm password'),
        phone: yup.number().required('Please enter your phone').min(12).label('phone')
    });

    const defaultValueForms: userRegis = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: 62
    };

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ defaultValues: defaultValueForms, mode: 'onBlur', resolver: yupResolver(schema) });

    const submitRegis = async (f: userRegis) => {
        console.log(f)
    };

    return (
        <>
            <Card>
                <CardHeader height={10}>
                    <b className="text-lg">Registrasi</b>
                </CardHeader>
                <CardBody>
                    <HStack spacing={10}>
                        <FormControl isInvalid={"username" in errors}>
                            <FormLabel>Username</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<CFauserAlt color="gray.500" />} />
                                <Input placeholder="username" type="text" {...register('username')} />
                            </InputGroup>
                        </FormControl>
                        <FormControl isInvalid={"email" in errors}>
                            <FormLabel>Email</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<AMail color="gray.500" />} />
                                <Input placeholder="email" type="email" {...register('email')} />
                            </InputGroup>
                        </FormControl>
                    </HStack>
                    <br />
                    <HStack spacing={10}>
                        <FormControl isInvalid={"password" in errors}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<CFaLock color="gray.500" />} />
                                <Input placeholder="password" type="password" {...register('password')} />
                            </InputGroup>
                        </FormControl>
                        <FormControl isInvalid={"confirm password" in errors}>
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<CFaLock color="gray.700" />} />
                                <Input placeholder="Confirm Pasword" type="password" {...register('confirmPassword')} />
                            </InputGroup>
                        </FormControl>
                    </HStack>
                    <br />
                    <HStack spacing={10}>
                        <FormControl isInvalid={"phone" in errors}>
                            <FormLabel>Phone</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none" children={<CFaPhone color="gray.500" />} />
                                <Input placeholder="+62" type="number" {...register('phone')} />
                            </InputGroup>
                        </FormControl>
                    </HStack>
                    <br />
                    <VStack>
                        <Button bg={'blue.600'} color={"white"} w={"100%"} h={10} onClick={handleSubmit(submitRegis)}>Registrasi</Button>
                        <Text className="text-black text-sm">Sudah punya akun?<Link href={'/auth/login'} className="text-blue-500 hover:underline right-10"> Masuk disini</Link></Text>
                    </VStack>
                </CardBody>
            </Card>
        </>
    )


};

export default FormRegis;