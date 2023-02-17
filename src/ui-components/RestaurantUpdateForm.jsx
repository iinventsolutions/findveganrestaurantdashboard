/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Restaurant } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RestaurantUpdateForm(props) {
  const {
    id: idProp,
    restaurant,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    image: "",
    deliveryFee: "",
    minDelivery: "",
    maxDelivery: "",
    address: "",
    lat: "",
    lng: "",
    sub: "",
    openingTime: "",
    closingTime: "",
    phone: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [image, setImage] = React.useState(initialValues.image);
  const [deliveryFee, setDeliveryFee] = React.useState(
    initialValues.deliveryFee
  );
  const [minDelivery, setMinDelivery] = React.useState(
    initialValues.minDelivery
  );
  const [maxDelivery, setMaxDelivery] = React.useState(
    initialValues.maxDelivery
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [lat, setLat] = React.useState(initialValues.lat);
  const [lng, setLng] = React.useState(initialValues.lng);
  const [sub, setSub] = React.useState(initialValues.sub);
  const [openingTime, setOpeningTime] = React.useState(
    initialValues.openingTime
  );
  const [closingTime, setClosingTime] = React.useState(
    initialValues.closingTime
  );
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = restaurantRecord
      ? { ...initialValues, ...restaurantRecord }
      : initialValues;
    setName(cleanValues.name);
    setImage(cleanValues.image);
    setDeliveryFee(cleanValues.deliveryFee);
    setMinDelivery(cleanValues.minDelivery);
    setMaxDelivery(cleanValues.maxDelivery);
    setAddress(cleanValues.address);
    setLat(cleanValues.lat);
    setLng(cleanValues.lng);
    setSub(cleanValues.sub);
    setOpeningTime(cleanValues.openingTime);
    setClosingTime(cleanValues.closingTime);
    setPhone(cleanValues.phone);
    setErrors({});
  };
  const [restaurantRecord, setRestaurantRecord] = React.useState(restaurant);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Restaurant, idProp)
        : restaurant;
      setRestaurantRecord(record);
    };
    queryData();
  }, [idProp, restaurant]);
  React.useEffect(resetStateValues, [restaurantRecord]);
  const validations = {
    name: [{ type: "Required" }],
    image: [],
    deliveryFee: [],
    minDelivery: [],
    maxDelivery: [],
    address: [],
    lat: [{ type: "Required" }],
    lng: [{ type: "Required" }],
    sub: [],
    openingTime: [],
    closingTime: [],
    phone: [],
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
          name,
          image,
          deliveryFee,
          minDelivery,
          maxDelivery,
          address,
          lat,
          lng,
          sub,
          openingTime,
          closingTime,
          phone,
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
          await DataStore.save(
            Restaurant.copyOf(restaurantRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RestaurantUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address,
              lat,
              lng,
              sub,
              openingTime,
              closingTime,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image: value,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address,
              lat,
              lng,
              sub,
              openingTime,
              closingTime,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Delivery fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={deliveryFee}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              image,
              deliveryFee: value,
              minDelivery,
              maxDelivery,
              address,
              lat,
              lng,
              sub,
              openingTime,
              closingTime,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.deliveryFee ?? value;
          }
          if (errors.deliveryFee?.hasError) {
            runValidationTasks("deliveryFee", value);
          }
          setDeliveryFee(value);
        }}
        onBlur={() => runValidationTasks("deliveryFee", deliveryFee)}
        errorMessage={errors.deliveryFee?.errorMessage}
        hasError={errors.deliveryFee?.hasError}
        {...getOverrideProps(overrides, "deliveryFee")}
      ></TextField>
      <TextField
        label="Min delivery"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minDelivery}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              image,
              deliveryFee,
              minDelivery: value,
              maxDelivery,
              address,
              lat,
              lng,
              sub,
              openingTime,
              closingTime,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.minDelivery ?? value;
          }
          if (errors.minDelivery?.hasError) {
            runValidationTasks("minDelivery", value);
          }
          setMinDelivery(value);
        }}
        onBlur={() => runValidationTasks("minDelivery", minDelivery)}
        errorMessage={errors.minDelivery?.errorMessage}
        hasError={errors.minDelivery?.hasError}
        {...getOverrideProps(overrides, "minDelivery")}
      ></TextField>
      <TextField
        label="Max delivery"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxDelivery}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery: value,
              address,
              lat,
              lng,
              sub,
              openingTime,
              closingTime,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.maxDelivery ?? value;
          }
          if (errors.maxDelivery?.hasError) {
            runValidationTasks("maxDelivery", value);
          }
          setMaxDelivery(value);
        }}
        onBlur={() => runValidationTasks("maxDelivery", maxDelivery)}
        errorMessage={errors.maxDelivery?.errorMessage}
        hasError={errors.maxDelivery?.hasError}
        {...getOverrideProps(overrides, "maxDelivery")}
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
              name,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address: value,
              lat,
              lng,
              sub,
              openingTime,
              closingTime,
              phone,
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
        label="Lat"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lat}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address,
              lat: value,
              lng,
              sub,
              openingTime,
              closingTime,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.lat ?? value;
          }
          if (errors.lat?.hasError) {
            runValidationTasks("lat", value);
          }
          setLat(value);
        }}
        onBlur={() => runValidationTasks("lat", lat)}
        errorMessage={errors.lat?.errorMessage}
        hasError={errors.lat?.hasError}
        {...getOverrideProps(overrides, "lat")}
      ></TextField>
      <TextField
        label="Lng"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lng}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address,
              lat,
              lng: value,
              sub,
              openingTime,
              closingTime,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.lng ?? value;
          }
          if (errors.lng?.hasError) {
            runValidationTasks("lng", value);
          }
          setLng(value);
        }}
        onBlur={() => runValidationTasks("lng", lng)}
        errorMessage={errors.lng?.errorMessage}
        hasError={errors.lng?.hasError}
        {...getOverrideProps(overrides, "lng")}
      ></TextField>
      <TextField
        label="Sub"
        isRequired={false}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address,
              lat,
              lng,
              sub: value,
              openingTime,
              closingTime,
              phone,
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
      <TextField
        label="Opening time"
        isRequired={false}
        isReadOnly={false}
        value={openingTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address,
              lat,
              lng,
              sub,
              openingTime: value,
              closingTime,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.openingTime ?? value;
          }
          if (errors.openingTime?.hasError) {
            runValidationTasks("openingTime", value);
          }
          setOpeningTime(value);
        }}
        onBlur={() => runValidationTasks("openingTime", openingTime)}
        errorMessage={errors.openingTime?.errorMessage}
        hasError={errors.openingTime?.hasError}
        {...getOverrideProps(overrides, "openingTime")}
      ></TextField>
      <TextField
        label="Closing time"
        isRequired={false}
        isReadOnly={false}
        value={closingTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address,
              lat,
              lng,
              sub,
              openingTime,
              closingTime: value,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.closingTime ?? value;
          }
          if (errors.closingTime?.hasError) {
            runValidationTasks("closingTime", value);
          }
          setClosingTime(value);
        }}
        onBlur={() => runValidationTasks("closingTime", closingTime)}
        errorMessage={errors.closingTime?.errorMessage}
        hasError={errors.closingTime?.hasError}
        {...getOverrideProps(overrides, "closingTime")}
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
              name,
              image,
              deliveryFee,
              minDelivery,
              maxDelivery,
              address,
              lat,
              lng,
              sub,
              openingTime,
              closingTime,
              phone: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || restaurant)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || restaurant) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
