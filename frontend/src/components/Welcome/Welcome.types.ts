
export type WelcomeContainerProps = {}

export type TForm = {
    urlConditions: TCondition[]
}

export type TCondition = {
    value: string
}

export type WelcomeViewProps = WelcomeContainerProps & {
    setTextCallback: (index: number, newValue: string) => void;
    addElement: () => void;
    urlConditions: TCondition[]
}

export type FieldsProps = {
    condition: TCondition;
    index: number;
    setTextCallback: WelcomeViewProps["setTextCallback"];
    addElement: WelcomeViewProps["addElement"];
}