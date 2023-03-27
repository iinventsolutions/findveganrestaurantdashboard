/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RestaurantOwner } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RestaurantOwnerUpdateFormInputValues = {
    fullname?: string;
    username?: string;
    email?: string;
    phone?: string;
    address?: string;
    dob?: string;
    planstatus?: string;
    sub?: string;
};
export declare type RestaurantOwnerUpdateFormValidationValues = {
    fullname?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    planstatus?: ValidationFunction<string>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurantOwnerUpdateFormOverridesProps = {
    RestaurantOwnerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullname?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    planstatus?: PrimitiveOverrideProps<SelectFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RestaurantOwnerUpdateFormProps = React.PropsWithChildren<{
    overrides?: RestaurantOwnerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    restaurantOwner?: RestaurantOwner;
    onSubmit?: (fields: RestaurantOwnerUpdateFormInputValues) => RestaurantOwnerUpdateFormInputValues;
    onSuccess?: (fields: RestaurantOwnerUpdateFormInputValues) => void;
    onError?: (fields: RestaurantOwnerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestaurantOwnerUpdateFormInputValues) => RestaurantOwnerUpdateFormInputValues;
    onValidate?: RestaurantOwnerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurantOwnerUpdateForm(props: RestaurantOwnerUpdateFormProps): React.ReactElement;
