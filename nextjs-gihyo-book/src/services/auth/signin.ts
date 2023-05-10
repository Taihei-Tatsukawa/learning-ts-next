import { ApiContext, User } from "types";
import { fetcher } from "utils";

export type SigninPrarms = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は "User"
   */
  username: string;
  /**
   * パスワード
   * サンプルユーザーのパスワードは "password"
   */
  password: string;
};

/**
 * 認証API
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async (context: ApiContext, params: SigninPrarms): Promise<User> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};

export default signin;
