"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useSWRMutation from "swr/mutation";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "../ui/separator";
import PocketBaseInstance from "@/lib/pocketbase";
import { PostRegisterUser } from "@/services/users";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { ClientResponseError } from "pocketbase";

const formSchema = z
  .object({
    fullname: z.string(),
    university: z.string(),
    phone_number: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirm: z.string(),
  })
  .required()
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

const Register = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { trigger, isMutating } = useSWRMutation(
    "/users/create",
    PostRegisterUser,
    {
      onError(err: ClientResponseError) {
        toast({
          variant: "destructive",
          title: "ERROR",
          description: JSON.stringify(err.response, null, 2),
        });
      },
    }
  );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      username: values.fullname,
      email: values.email,
      emailVisibility: true,
      password: values.password,
      passwordConfirm: values.confirm,
      fullname: values.fullname,
      university: values.university,
      phone_number: values.phone_number,
    };

    try {
      await trigger({ data });
      toast({
        title: "SUCCESS",
        description: "Your account is created, Please try to login.",
      });
    } catch (err) {
      if (err instanceof ClientResponseError) {
        toast({
          variant: "destructive",
          title: "ERROR",
          description: JSON.stringify(err.response, null, 2),
        });
      } else {
        toast({
          variant: "destructive",
          title: "ERROR",
          description: "Please try again later",
        });
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            className="space-y-2"
            id="register-form"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator className="my-2" />

            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Universitas</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor HP</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button disabled={isMutating} type="submit" form="register-form">
          {isMutating ?? <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Register
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Register;