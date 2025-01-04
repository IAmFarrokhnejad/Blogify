"use client";

import { CreateSiteAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { useForm } from '@conform-to/react';
import { parseWithZod } from "@conform-to/zod";
import { siteSchema } from "@/app/utils/zodSchemas";


export default function NewSiteRoute() {

    const [lastResult, action] = useActionState(CreateSiteAction, undefined);
    const [form, fields] = useForm({
        lastResult,

        onValidate({ formData }) {
            return parseWithZod(formData, {
                schema: siteSchema,
            });
        },

        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    });

    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <Card className="max-w-[450px]">
                <CardHeader>
                    <CardTitle>Create Site</CardTitle>
                    <CardDescription>Click on the submit button once you're done...</CardDescription>
                </CardHeader>
                <form id={form.id} onSubmit={form.onSubmit} action={action}>
                    <CardContent>
                        <div className="flex flex-col gap-y-6">
                            <div className="grid gap-4">
                                <Label>Site Name</Label>
                                <Input name={fields.subdirectory.name} key={fields.subdirectory.key} defaultValue={fields.subdirectory.initialValue} placeholder="Choose a Subdirectory..." />
                                <p className="text-red-500 text-sm">{fields.name.errors}</p>
                            </div>

                            <div className="grid gap-4">
                                <Label>Subdirectory</Label>
                                <Input placeholder="Choose a Subdirectory..."></Input>
                            </div>

                            <div className="grid gap-4">
                                <Label>Description</Label>
                                <Textarea placeholder="Write a description for your site..."></Textarea>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Submit</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}