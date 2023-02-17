/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MobileUser } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MobileUserUpdateFormInputValues = {
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
    sub?: string;
};
export declare type MobileUserUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileUserUpdateFormOverridesProps = {
    MobileUserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MobileUserUpdateFormProps = React.PropsWithChildren<{
    overrides?: MobileUserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mobileUser?: MobileUser;
    onSubmit?: (fields: MobileUserUpdateFormInputValues) => MobileUserUpdateFormInputValues;
    onSuccess?: (fields: MobileUserUpdateFormInputValues) => void;
    onError?: (fields: MobileUserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MobileUserUpdateFormInputValues) => MobileUserUpdateFormInputValues;
    onValidate?: MobileUserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MobileUserUpdateForm(props: MobileUserUpdateFormProps): React.ReactElement;
