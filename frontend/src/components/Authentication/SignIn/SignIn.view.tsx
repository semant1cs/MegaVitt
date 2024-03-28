import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextField from "@ui/TextField";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import Button from "@ui/Button";
import type { TSignInViewProps } from "../Authentication.types";
import { FC } from "react";

const SignInView: FC<TSignInViewProps> = ({ form, setEmail, setPassword, handleSaveForm, changeCurrentPage }) => {
  return (
    <div>
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

      <Button onClick={handleSaveForm}>Войти</Button>

      <div>
        <Button onClick={() => changeCurrentPage("signUp")}>Зарегистрироваться</Button>

        <Button onClick={() => {}}>Забыли пароль?</Button>
      </div>
    </div>
  );
};

export default SignInView;
