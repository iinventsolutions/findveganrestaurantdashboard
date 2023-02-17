/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserMobile } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserMobileUpdateFormInputValues = {
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
    sub?: string;
};
export declare type UserMobileUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserMobileUpdateFormOverridesProps = {
    UserMobileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserMobileUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserMobileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userMobile?: UserMobile;
    onSubmit?: (fields: UserMobileUpdateFormInputValues) => UserMobileUpdateFormInputValues;
    onSuccess?: (fields: UserMobileUpdateFormInputValues) => void;
    onError?: (fields: UserMobileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserMobileUpdateFormInputValues) => UserMobileUpdateFormInputValues;
    onValidate?: UserMobileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserMobileUpdateForm(props: UserMobileUpdateFormProps): React.ReactElement;
