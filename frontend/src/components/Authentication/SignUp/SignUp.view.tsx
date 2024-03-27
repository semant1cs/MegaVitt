import { FC } from "react";
import type { TSignUpViewProps } from "../Authentication.types";
import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextField from "@ui/TextField";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import Button from "@ui/Button";

/** Вьюха для отображения страницы регистрации */
const SignUpView: FC<TSignUpViewProps> = props => {
  const { form, setEmail, setPassword, setUserName, handleSaveForm, changeCurrentPage } = props;

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

      <button onClick={() => changeCurrentPage("signIn")}>dawdadw</button>

      <Button onClick={handleSaveForm}>Сохранить</Button>
    </div>
  );
};

export default SignUpView;
