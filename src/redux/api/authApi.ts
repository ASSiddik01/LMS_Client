import { baseApi } from "./baseApi";
const AUTH_PATH = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    signIn: build.mutation({
      query: (userData: any) => ({
        url: `${AUTH_PATH}/signin`,
        method: "POST",
        data: userData,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
