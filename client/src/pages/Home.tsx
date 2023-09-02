import React from "react";
import { useGetUserProfileQuery } from "../redux/services/userApi";
import Loading from "../components/Loading";

const Home: React.FC = () => {
  const { isLoading } = useGetUserProfileQuery();

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
