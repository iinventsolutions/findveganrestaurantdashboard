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
export declare type RestaurantCreateFormInputValues = {
    name?: string;
    image?: string;
    deliveryFee?: number;
    maxDelivery?: number;
    minDelivery?: number;
    lat?: number;
    lng?: number;
    sub?: string;
    openingTime?: string;
    closingTime?: string;
    address?: string;
    phone?: string;
};
export declare type RestaurantCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    deliveryFee?: ValidationFunction<number>;
    maxDelivery?: ValidationFunction<number>;
    minDelivery?: ValidationFunction<number>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    sub?: ValidationFunction<string>;
    openingTime?: ValidationFunction<string>;
    closingTime?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurantCreateFormOverridesProps = {
    RestaurantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryFee?: PrimitiveOverrideProps<TextFieldProps>;
    maxDelivery?: PrimitiveOverrideProps<TextFieldProps>;
    minDelivery?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
    openingTime?: PrimitiveOverrideProps<TextFieldProps>;
    closingTime?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RestaurantCreateFormProps = React.PropsWithChildren<{
    overrides?: RestaurantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RestaurantCreateFormInputValues) => RestaurantCreateFormInputValues;
    onSuccess?: (fields: RestaurantCreateFormInputValues) => void;
    onError?: (fields: RestaurantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestaurantCreateFormInputValues) => RestaurantCreateFormInputValues;
    onValidate?: RestaurantCreateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurantCreateForm(props: RestaurantCreateFormProps): React.ReactElement;
