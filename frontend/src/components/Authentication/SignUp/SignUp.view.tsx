import { FC } from "react";
import type { TSignUpViewProps } from "../Authentication.types";
import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextField from "@ui/TextField";
import Button from "@ui/Button";
import styles from "../Authentication.module.scss";
import TextFieldUnderline from "@ui/TextField/TextFieldUnderline";
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
      <div className={styles.header}>
        <button
          className={[styles.close, "close-icon"].join(" ")}
          onClick={() => navigate("/")}
        />

        <Button
          variant="text"
          className={styles.logo}
          onClick={() => navigate("/")}
        >
          VASKA
        </Button>
      </div>

      <div className={styles.inputs}>
        <TextFieldContainer variant="light">
          <TextFieldLabel>Имя пользователя</TextFieldLabel>

          <TextField
            type="text"
            name="username"
            autoComplete="username"
            value={form?.username || ""}
            onChange={event => setUsername(event.target.value)}
          />

          <TextFieldUnderline />
        </TextFieldContainer>

        <TextFieldContainer variant="light">
          <TextFieldLabel>Электронная почта</TextFieldLabel>

          <TextField
            type="email"
            name="email"
            autoComplete="off"
            value={form?.email || ""}
            onChange={event => setEmail(event.target.value)}
          />

          <TextFieldUnderline />
        </TextFieldContainer>

        <TextFieldContainer variant="light">
          <TextFieldLabel>Пароль</TextFieldLabel>

          <TextField
            type="password"
            name="password"
            value={form?.password || ""}
            onChange={event => setPassword(event.target.value)}
          />

          <TextFieldUnderline />
        </TextFieldContainer>
      </div>

      <div className={styles.buttons}>
        <Button
          variant="contained-white"
          onClick={handleSaveForm}
        >
          Зарегистрироваться
        </Button>

        <div className={styles.buttons__hint}>
          <p className={styles.buttons__hint__text}>Уже есть аккаунт?</p>

          <Button
            variant="text"
            className={styles.buttons__hint__button}
            onClick={() => changeCurrentPage("signIn")}
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
