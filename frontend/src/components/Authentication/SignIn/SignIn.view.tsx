import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextField from "@ui/TextField";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import Button from "@ui/Button";
import type { TSignInViewProps } from "../Authentication.types";
import { FC } from "react";
import styles from "../Authentication.module.scss";
import { useNavigate } from "react-router-dom";

const SignInView: FC<TSignInViewProps> = ({ form, setEmail, setPassword, handleSaveForm, changeCurrentPage }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.signIn}>
      <Button
        variant="text"
        className={styles.logo}
        onClick={() => navigate("/")}
      >
        VASKA
      </Button>

      <div className={styles.inputs}>
        <TextFieldContainer variant="light">
          <TextFieldLabel>Электронная почта</TextFieldLabel>

          <TextFieldInner>
            <TextField
              value={form?.email || ""}
              onChange={event => setEmail(event.target.value)}
            />
          </TextFieldInner>
        </TextFieldContainer>

        <TextFieldContainer variant="light">
          <TextFieldLabel>Пароль</TextFieldLabel>

          <TextFieldInner>
            <TextField
              value={form?.password || ""}
              onChange={event => setPassword(event.target.value)}
            />
          </TextFieldInner>
        </TextFieldContainer>
      </div>

      <div className={styles.buttons}>
        <Button
          variant="contained-white"
          onClick={handleSaveForm}
        >
          Войти
        </Button>

        <div>
          <Button onClick={() => changeCurrentPage("signUp")}>Зарегистрироваться</Button>

          <Button onClick={() => {}}>Забыли пароль?</Button>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
