import { FC } from "react";
import { TSignInProps } from "../Authentication.types";
import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextField from "@ui/TextField";
import TextFieldInner from "@ui/TextField/TextFieldInner";

const SignIn: FC<TSignInProps> = props => {
  return (
    <div>
      <TextFieldContainer>
        <TextFieldLabel>Электронная почта</TextFieldLabel>

        <TextFieldInner>
          Привет вход
          <button onClick={() => props.changeCurrentPage("signUp")}>dawdadw</button>
          {/* <TextField value={}/> */}
        </TextFieldInner>
      </TextFieldContainer>
    </div>
  );
};

export default SignIn;
