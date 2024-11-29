"use client";

import { useEffect, useTransition, startTransition } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../lib/actions";
import { useActionState } from "react";
import { Button } from "./Button";
import { lusitana } from "../fonts/fonts"; 

export function SignupForm() {
    // const [errorMessage, formAction, isPending, result] = useActionState(
    //     signup,
    //     undefined
    // );
    const [state, formAction] = useActionState(signup, undefined);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    useEffect(() => {
        if (state?.message === 'User created successfully') {
            router.push("/login");
        }
    }, [state, router])

    const handleSubmit = (formData) => {
        startTransition(() => {
            formAction(formData);
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     startTransition(() => {
    //         formAction(formData);
    //     })
    // };

    return (
        <form action={handleSubmit} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className={`${lusitana.className} mb-3 text-2xl`}>Sign Up</h1>
                <p>
                    We're thankful that you're considering us to be the best source for game reviews :3
                </p>
                <div className="w-full">
                    <div>
                        <label className="mb-3 mt-5 block font-medium text-gray-900" htmlFor="name">Name</label>
                        <div className="relative">
                            <input 
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="name" 
                                name="name" 
                                type="text"
                                placeholder="Name" 
                                required
                            />
                        </div>
                        {state?.errors?.name && state.errors.name.map((error) => (
                            <p key={error} className="text-red-500">{error}</p>
                        ))}
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        {state?.errors?.email && state.errors.email.map((error) => (
                            <p key={error} className="text-red-500">{error}</p>
                        ))}
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        {state?.errors?.password && (
                            <div className="text-red-500">
                                <p>Password must:</p>
                                <ul>
                                    {state.errors.password.map((err) => (
                                        <li key={err}>- {err}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <Button className="mt-4 w-full text-center" aria-disabled={isPending}>
                    Sign Up
                </Button>
                {state?.message && (
                    <>
                        <p className="text-sm text-red-500">{state.message}</p>
                    </>
                )}
            </div>
        </form>
    )
}