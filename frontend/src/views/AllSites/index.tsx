import AllSitesContainer from "@components/AllSites/AllSites.container";
import Layout from "@layout/index";
import { auth } from "@store/AuthStore";
import { useEffect } from "react";

const AllSites = () => {
  useEffect(() => {
    (async () => await auth.getProfile())();
  }, []);

  return (
    <Layout>
      <AllSitesContainer />
    </Layout>
  );
};

export default AllSites;
