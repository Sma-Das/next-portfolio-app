import { useRouter } from "next/router";
import { useEffect } from "react";

const PageNotFound: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return <></>;
};

export default PageNotFound;
