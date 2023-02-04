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
export declare type RestaurantOwnerCreateFormInputValues = {
    name?: string;
    telephone?: number;
    DOB?: string;
};
export declare type RestaurantOwnerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    telephone?: ValidationFunction<number>;
    DOB?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurantOwnerCreateFormOverridesProps = {
    RestaurantOwnerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    DOB?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RestaurantOwnerCreateFormProps = React.PropsWithChildren<{
    overrides?: RestaurantOwnerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RestaurantOwnerCreateFormInputValues) => RestaurantOwnerCreateFormInputValues;
    onSuccess?: (fields: RestaurantOwnerCreateFormInputValues) => void;
    onError?: (fields: RestaurantOwnerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestaurantOwnerCreateFormInputValues) => RestaurantOwnerCreateFormInputValues;
    onValidate?: RestaurantOwnerCreateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurantOwnerCreateForm(props: RestaurantOwnerCreateFormProps): React.ReactElement;
