import { FC } from "react";
import type { TSignUpViewProps } from "../Authentication.types";
import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextField from "@ui/TextField";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import Button from "@ui/Button";

/** Вьюха для отображения страницы регистрации */
const SignUpView: FC<TSignUpViewProps> = ({
  form,
  setEmail,
  setPassword,
  setUsername,
  handleSaveForm,
  changeCurrentPage,
}) => {
  return (
    <div>
      <TextFieldContainer>
        <TextFieldLabel>Имя пользователя</TextFieldLabel>

        <TextFieldInner>
          <TextField
            value={form?.username || ""}
            onChange={event => setUsername(event.target.value)}
          />
        </TextFieldInner>
      </TextFieldContainer>

      <TextFieldContainer>
        <TextFieldLabel>Электронная почта</TextFieldLabel>

        <TextFieldInner>
          <TextField
            value={form?.email || ""}
            onChange={event => setEmail(event.target.value)}
          />
        </TextFieldInner>
      </TextFieldContainer>

      <TextFieldContainer>
        <TextFieldLabel>Пароль</TextFieldLabel>

        <TextFieldInner>
          <TextField
            value={form?.password || ""}
            onChange={event => setPassword(event.target.value)}
          />
        </TextFieldInner>
      </TextFieldContainer>

      <Button onClick={handleSaveForm}>Зарегистрироваться</Button>

      <div>
        <span>Уже есть аккаунт?</span>

        <Button onClick={() => changeCurrentPage("signIn")}>Войти</Button>
      </div>
    </div>
  );
};

export default SignUpView;
