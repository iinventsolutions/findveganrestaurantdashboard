/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MobileUserCreateFormInputValues = {
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
    sub?: string;
};
export declare type MobileUserCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileUserCreateFormOverridesProps = {
    MobileUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MobileUserCreateFormProps = React.PropsWithChildren<{
    overrides?: MobileUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MobileUserCreateFormInputValues) => MobileUserCreateFormInputValues;
    onSuccess?: (fields: MobileUserCreateFormInputValues) => void;
    onError?: (fields: MobileUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MobileUserCreateFormInputValues) => MobileUserCreateFormInputValues;
    onValidate?: MobileUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function MobileUserCreateForm(props: MobileUserCreateFormProps): React.ReactElement;
