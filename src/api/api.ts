import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.medievalrain.net/erkon" }),
  endpoints: (builder) => ({
    sendCode: builder.mutation<void, string>({
      query: (phone) => ({
        url: "code",
        method: "POST",
        body: { phone },
      }),
    }),
    verifyCode: builder.mutation<void, string>({
      query: (code) => ({
        url: "verify",
        method: "POST",
        body: { code },
      }),
    }),
  }),
});
