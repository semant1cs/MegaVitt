import { FC } from "react";
import type { TSignUpViewProps } from "../Authentication.types";
import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextField from "@ui/TextField";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import Button from "@ui/Button";
import styles from "../Authentication.module.scss";
import { useNavigate } from "react-router-dom";

/** Вьюха для отображения страницы регистрации */
const SignUpView: FC<TSignUpViewProps> = ({
  form,
  setEmail,
  setPassword,
  setUsername,
  handleSaveForm,
  changeCurrentPage,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.signUp}>
      <Button
        variant="text"
        className={styles.logo}
        onClick={() => navigate("/")}
      >
        VASKA
      </Button>

      <div className={styles.inputs}>
        <TextFieldContainer variant="light">
          <TextFieldLabel>Имя пользователя</TextFieldLabel>

          <TextFieldInner>
            <TextField
              value={form?.username || ""}
              onChange={event => setUsername(event.target.value)}
            />
          </TextFieldInner>
        </TextFieldContainer>

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
          Зарегистрироваться
        </Button>

        <div>
          <span>Уже есть аккаунт?</span>

          <Button onClick={() => changeCurrentPage("signIn")}>Войти</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
