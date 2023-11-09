"use client";

import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";

const Activation = ({ params }: { params: any }) => {
  const { token } = params;
  console.log(token);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/signin");
    }, 5000);
  }, []);
  return (
    <>
      <div className="text-light_primary dark:text-dark_primary flex justify-center items-center flex-col gap-3">
        <CircularProgress
          sx={{ color: "unset", height: "50px", width: "50px" }}
          className="text-light_primary dark:text-dark_primary"
        />
        <h1 className="verifying text-4xl">Verifying...</h1>
      </div>
      <div className="text-light_primary dark:text-dark_primary flex justify-center items-center flex-col gap-3">
        {/* BsCheckCircle */}
        <BsCheckCircle
          size="50"
          className="dark:text-dark_primary text-light_primary"
        />
        <h1 className="verifying text-4xl">Verified</h1>
      </div>
    </>
  );
};

export default Activation;
