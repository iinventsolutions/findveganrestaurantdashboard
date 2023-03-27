/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Restaurant } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RestaurantUpdateFormInputValues = {
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
export declare type RestaurantUpdateFormValidationValues = {
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
export declare type RestaurantUpdateFormOverridesProps = {
    RestaurantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type RestaurantUpdateFormProps = React.PropsWithChildren<{
    overrides?: RestaurantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    restaurant?: Restaurant;
    onSubmit?: (fields: RestaurantUpdateFormInputValues) => RestaurantUpdateFormInputValues;
    onSuccess?: (fields: RestaurantUpdateFormInputValues) => void;
    onError?: (fields: RestaurantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestaurantUpdateFormInputValues) => RestaurantUpdateFormInputValues;
    onValidate?: RestaurantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurantUpdateForm(props: RestaurantUpdateFormProps): React.ReactElement;
