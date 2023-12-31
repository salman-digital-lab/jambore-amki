/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { ClientResponseError } from "pocketbase";

import { cn } from "@/lib/utils";
import { DeleteUpdateIdeas, GetListIdeas } from "@/services/ideas";

import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { useToast } from "../ui/use-toast";
import PocketBaseInstance from "@/lib/pocketbase";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const SubmittedIdeas = ({ userId }: { userId: string }) => {
  const { toast } = useToast();

  const { trigger, isMutating } = useSWRMutation(
    "/users/delete",
    DeleteUpdateIdeas
  );

  const { data, mutate } = useSWR(
    {
      arg: { page: 1, perPage: 50, options: { filter: `user = "${userId}"` } },
    },
    GetListIdeas,
    {
      onError: (err) => {
        if (err instanceof ClientResponseError) {
          toast({
            variant: "destructive",
            title: "Terjadi Kesalahan",
            description: JSON.stringify(err.response, null, 2),
          });
        } else {
          toast({
            variant: "destructive",
            title: "Terjadi Kesalahan",
            description: "Tolong coba lagi setelah beberapa saat.",
          });
        }
      },
    }
  );

  return (
    <main
      className={cn(
        `flex flex-col items-center min-h-[calc(100vh-80px)] px-6 py-10`
      )}
    >
      <h1
        className={cn(`
          text-center text-4xl font-bold
          p-10
        `)}
      >
        Daftar Ide
      </h1>
      <div
        className={cn(`
        flex justify-center items-start flex-wrap gap-5    
        md:w-[1000px] md:justify-start
      `)}
      >
        {data?.items.map((item) => {
          return (
            <Card key={item.id} className={`w-full max-w-[300px]`}>
              <img
                className="object-contain w-[300px] h-[300px]"
                src={PocketBaseInstance.files.getUrl(item, item.images[0])}
                width={400}
                height={400}
                alt={item.title}
              />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.abstract}</CardContent>
              <CardFooter className={`flex justify-center gap-2`}>
                <Button asChild>
                  <Link href={`/profile/ideas/edit/${item.id}`}>Edit</Link>
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Delete</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Apakah Kamu Yakin?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Aksi yang akan kamu lakukan adalah menghapus ide yang
                        telah kamu tulis.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Batal</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          trigger({ record_id: item.id });
                          mutate();
                        }}
                      >
                        Hapus
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          );
        })}
        <Card
          className={cn(`
            w-full max-w-[300px] 
            `)}
        >
          <Link
            className={cn(`
            w-full h-full px-10 py-16 relative
            flex flex-col items-center justify-center
            hover:bg-gray-100
            `)}
            href="/profile/ideas/create"
          >
            <span className="absolute top-7">Tambahkan Ide</span>
            <Plus />
          </Link>
        </Card>
      </div>
    </main>
  );
};

export default SubmittedIdeas;
