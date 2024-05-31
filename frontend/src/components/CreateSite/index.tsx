import { site } from "@store/SiteStore";
import Initialization from "./Initialization";
import Creator from "@components/Creator";
import { observer } from "mobx-react-lite";

const CreateSiteContainer = observer(() => {
  function getStepPage() {
    switch (site.stepPage) {
      case "initialization":
        return <Initialization />;
      case "creator":
      default:
        return <Creator />;
    }
  }

  return getStepPage();
});

export default CreateSiteContainer;
