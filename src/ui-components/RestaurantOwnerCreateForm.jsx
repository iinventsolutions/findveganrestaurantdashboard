/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { RestaurantOwner } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RestaurantOwnerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fullname: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    planstatus: undefined,
    sub: "",
  };
  const [fullname, setFullname] = React.useState(initialValues.fullname);
  const [username, setUsername] = React.useState(initialValues.username);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [address, setAddress] = React.useState(initialValues.address);
  const [dob, setDob] = React.useState(initialValues.dob);
  const [planstatus, setPlanstatus] = React.useState(initialValues.planstatus);
  const [sub, setSub] = React.useState(initialValues.sub);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFullname(initialValues.fullname);
    setUsername(initialValues.username);
    setEmail(initialValues.email);
    setPhone(initialValues.phone);
    setAddress(initialValues.address);
    setDob(initialValues.dob);
    setPlanstatus(initialValues.planstatus);
    setSub(initialValues.sub);
    setErrors({});
  };
  const validations = {
    fullname: [{ type: "Required" }],
    username: [{ type: "Required" }],
    email: [{ type: "Required" }],
    phone: [],
    address: [],
    dob: [],
    planstatus: [],
    sub: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fullname,
          username,
          email,
          phone,
          address,
          dob,
          planstatus,
          sub,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new RestaurantOwner(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RestaurantOwnerCreateForm")}
      {...rest}
    >
      <TextField
        label="Fullname"
        isRequired={true}
        isReadOnly={false}
        value={fullname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname: value,
              username,
              email,
              phone,
              address,
              dob,
              planstatus,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.fullname ?? value;
          }
          if (errors.fullname?.hasError) {
            runValidationTasks("fullname", value);
          }
          setFullname(value);
        }}
        onBlur={() => runValidationTasks("fullname", fullname)}
        errorMessage={errors.fullname?.errorMessage}
        hasError={errors.fullname?.hasError}
        {...getOverrideProps(overrides, "fullname")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              username: value,
              email,
              phone,
              address,
              dob,
              planstatus,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              username,
              email: value,
              phone,
              address,
              dob,
              planstatus,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              username,
              email,
              phone: value,
              address,
              dob,
              planstatus,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              username,
              email,
              phone,
              address: value,
              dob,
              planstatus,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              username,
              email,
              phone,
              address,
              dob: value,
              planstatus,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.dob ?? value;
          }
          if (errors.dob?.hasError) {
            runValidationTasks("dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("dob", dob)}
        errorMessage={errors.dob?.errorMessage}
        hasError={errors.dob?.hasError}
        {...getOverrideProps(overrides, "dob")}
      ></TextField>
      <SelectField
        label="Planstatus"
        placeholder="Please select an option"
        isDisabled={false}
        value={planstatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              username,
              email,
              phone,
              address,
              dob,
              planstatus: value,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.planstatus ?? value;
          }
          if (errors.planstatus?.hasError) {
            runValidationTasks("planstatus", value);
          }
          setPlanstatus(value);
        }}
        onBlur={() => runValidationTasks("planstatus", planstatus)}
        errorMessage={errors.planstatus?.errorMessage}
        hasError={errors.planstatus?.hasError}
        {...getOverrideProps(overrides, "planstatus")}
      >
        <option
          children="Free"
          value="FREE"
          {...getOverrideProps(overrides, "planstatusoption0")}
        ></option>
        <option
          children="Basic"
          value="BASIC"
          {...getOverrideProps(overrides, "planstatusoption1")}
        ></option>
        <option
          children="Premium"
          value="PREMIUM"
          {...getOverrideProps(overrides, "planstatusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Sub"
        isRequired={false}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              username,
              email,
              phone,
              address,
              dob,
              planstatus,
              sub: value,
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
