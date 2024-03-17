export type WelcomeContainerProps = {}

export type TForm = {
    urlConditions: { value: string }[]
}

export type WelcomeViewProps = WelcomeContainerProps & {
    setTextCallback: (index: number, newValue: string) => void;
    addElement: () => void;
    urlConditions: { value: string }[]
    setFormCallback: (form: TForm) => void;
    setUrlConditionsCallback: (newCond: { value: string }[]) => void;
    form: TForm;
}

export type FieldsProps = {
    condition: { value: string };
    urlConditions: WelcomeViewProps["urlConditions"];
    setUrlConditionsCallback: WelcomeViewProps["setUrlConditionsCallback"];
    index: number;
    setTextCallback: WelcomeViewProps["setTextCallback"];
    addElement: WelcomeViewProps["addElement"];
    setFormCallback: WelcomeViewProps["setFormCallback"];
    form: WelcomeViewProps["form"]
}