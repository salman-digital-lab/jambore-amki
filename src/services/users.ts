import { UserModel } from "@/interfaces";
import PocketBaseInstance from "@/lib/pocketbase";

export const PostRegisterUser = async (
  _key: string,
  { arg }: { arg: { data: Partial<UserModel> } }
) => {
  return await PocketBaseInstance.collection("users").create<UserModel>(
    arg.data
  );
};

export const UpdateRegisteredUser = async (
  _key: string,
  { arg }: { arg: { userId: string; data: Partial<UserModel> } }
) => {
  return await PocketBaseInstance.collection("users").update<UserModel>(
    arg.userId,
    arg.data
  );
};

export const PostLoginUser = async (
  _key: string,
  { arg }: { arg: { email: string; password: string } }
) => {
  return await PocketBaseInstance.collection("users").authWithPassword(
    arg.email,
    arg.password
  );
};
