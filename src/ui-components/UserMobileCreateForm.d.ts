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
export declare type UserMobileCreateFormInputValues = {
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
    sub?: string;
};
export declare type UserMobileCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserMobileCreateFormOverridesProps = {
    UserMobileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserMobileCreateFormProps = React.PropsWithChildren<{
    overrides?: UserMobileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserMobileCreateFormInputValues) => UserMobileCreateFormInputValues;
    onSuccess?: (fields: UserMobileCreateFormInputValues) => void;
    onError?: (fields: UserMobileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserMobileCreateFormInputValues) => UserMobileCreateFormInputValues;
    onValidate?: UserMobileCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserMobileCreateForm(props: UserMobileCreateFormProps): React.ReactElement;
