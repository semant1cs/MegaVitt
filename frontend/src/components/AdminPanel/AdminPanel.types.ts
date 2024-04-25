import { GetUserResponse } from "zod-contracts";

export type AdminPanelViewProps = {
  handleLogOut: () => void;
  usersList?: GetUserResponse[];
};
