import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextField from "@ui/TextField";
import Button from "@ui/Button";
import type { TSignInViewProps } from "../Authentication.types";
import { FC } from "react";
import styles from "../Authentication.module.scss";
import TextFieldUnderline from "@ui/TextField/TextFieldUnderline";
import { useNavigate } from "react-router-dom";

const SignInView: FC<TSignInViewProps> = ({ form, setEmail, setPassword, handleSaveForm, changeCurrentPage }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.signIn}>
      <div className={styles.header}>
        <Button
          variant="icon"
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
          size="md"
          color="white"
          variant="contained"
          onClick={handleSaveForm}
          className={styles.buttons__button}
        >
          Войти
        </Button>

        <div className={styles.buttons__hint}>
          <Button
            variant="text"
            className={styles.buttons__hint__button}
            onClick={() => changeCurrentPage("signUp")}
          >
            Зарегистрироваться
          </Button>

          <p className={styles.buttons__hint__text}>Забыли пароль?</p>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
