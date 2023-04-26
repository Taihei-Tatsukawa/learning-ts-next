import { ApiContext, User } from "types";
import { fetcher } from "utils";

export type GetUserParams = {
  /**
   * ユーザーID
   */
  id: number;
};

/**
 * ユーザーAPI(個別取得)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
const getUser = async (context: ApiContext, { id }: GetUserParams): Promise<User> => {
  /**
   * ユーザーAPI
   * サンプルレスポンス
    {
      "id": "1",
      "username": "taketo",
      "displayName": "Taketo Yoshida",
      "email": "taketo@example.com".
      "profileImageUrl": "/users/1.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
   */
  return await fetcher(`${context.apiRootUrl.replace(/\/$/, "")}/users/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export default getUser;
