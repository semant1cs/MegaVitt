import authAxiosInstance from "@api/auth-api-instance";
import { makeAutoObservable, set } from "mobx";
import { GetUserResponse } from "zod-contracts";

const usersUrl = "users";

class AdminPanelStore {
  constructor() {
    makeAutoObservable(this);
  }

  usersList?: GetUserResponse[];
  async getUsers() {
    const response = await authAxiosInstance.get(usersUrl);
    this.setUserList(response.data);
  }

  setUserList(fetchedUsersList: GetUserResponse[]) {
    this.usersList = fetchedUsersList;
  }
}

export default new AdminPanelStore();
