import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KEY_ACCESS_TOKEN, getItem } from "../../utils/localStorageManager";
const accessToken = getItem(KEY_ACCESS_TOKEN);

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUserProfile: builder.query<any, void>({
      query: () => ({
        method: "GET",
        url: "user",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Auth"],
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
