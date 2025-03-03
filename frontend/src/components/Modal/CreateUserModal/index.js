import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  FormControl,
  Modal,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Switch,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  CloseButtonBox,
  CustomFormControl,
  FormContainer,
  MenuItemContainer,
  SubmitButton,
} from "../style";
import { useTranslation } from "react-i18next";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import moment from "moment";
import {
  FormTextField,
  FormErrorText,
  ArchivedIcon,
  ArchivedChip,
} from "../../../pages/style";

const createValidationSchema = Yup.object().shape({
  userId: Yup.string().required("register_userId_required"),
  name: Yup.string().required("register_name_required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .email("register_email_invalid")
    .required("register_email_required"),
  password: Yup.string()
    .required("register_password_required")
    .min(8, "register_password_min_length")
    .max(128, "register_password_max_length")
    .matches(/^[a-zA-Z0-9]+$/, "register_password_allowed_combination"),
  birthday: Yup.string()
    .required("register_birthday_required")
    .test("date", "Invalid date format", (value) => {
      const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d{2}$/;
      return regex.test(value);
    }),
  gender: Yup.string().required("register_gender_required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "modal_confirm_password_match")
    .required("register_confirm_password_required"),
});

const editValidationSchema = Yup.object().shape({
  userId: Yup.string().required("register_userId_required"),
  name: Yup.string().required("register_name_required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .email("register_email_invalid")
    .required("register_email_required"),
  birthday: Yup.string()
    .required("register_birthday_required")
    .test("date", "Invalid date format", (value) => {
      const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d{2}$/;
      return regex.test(value);
    }),
  gender: Yup.string().required("register_gender_required"),
});

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
    },
  },
};

const CreateUserModal = ({ open, close, data, create, update }) => {
  const { t } = useTranslation();
  const id = data?.id;
  const editing = !!data;

  const [toggle, setToggle] = useState(true);
  const [sectionId, setSectionId] = useState(0);
  const [gender, setGender] = useState(true);
  const sections = useSelector((state) => state.sectionReducer.sections);
  const subSections = useSelector(
    (state) => state.subSectionReducer.subSections,
  );
  const roles = useSelector((state) => state.roleReducer.roles);
  const getLocaleString = (key) => t(key);
  const handleSubmit = async (data) => {
    const payload = {
      ...data,
      email: data.email === "" ? null : data.email,
      sectionId: data.sectionId === "" ? null : data.sectionId,
      subsectionId: data.subsectionId === "" ? null : data.subsectionId,
      roleId: data.roleId === "" ? null : data.roleId,
    };
    if (!editing) {
      create(payload);
    } else {
      update(id, payload, form);
    }
  };

  const handleChangeSectionId = (e) => {
    form.setFieldValue("sectionId", e.target.value);
    form.setFieldValue("subsectionId", "");
    setSectionId(e.target.value);
  };

  const handleChangeRoleId = (e) => {
    form.setFieldValue("roleId", e.target.value);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) form.setFieldValue("activated", !data?.activated ?? true);
    else form.setFieldValue("activated", data?.activated ?? false);
  };

  const handleSetGender = (event) => {
    setGender(event.target.value);
    form.setFieldValue("gender", event.target.value);
  };

  const form = useFormik({
    validationSchema: !editing ? createValidationSchema : editValidationSchema,
    initialValues: {
      userId: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      sectionId: "",
      subsectionId: "",
      roleId: "",
      activated: data?.activated ?? false,
      birthday: "", // Initialize to empty string
      gender: true,
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (data && open) {
      form.setValues({
        userId: data.userId ?? "",
        name: data.name ?? "",
        email: data.email ?? "",
        password: data.password ?? "",
        confirmPassword: data.password ?? "",
        sectionId: data.sectionId ?? "",
        subsectionId: data.subsectionId ?? "",
        roleId: data.roleId ?? "",
        activated: data.activated ?? false,
        birthday: data.birthday ?? "", // Set to account's birthday or empty
        gender: data.gender ?? true,
      });
      setSectionId(data.sectionId);
    } else {
      form.resetForm();
      setSectionId("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, open]);

  const isChanged = useMemo(
    () =>
      (data && (
        form.values.userId !== data?.userId ||
        form.values.name !== data?.name ||
        form.values.email !== data?.email ||
        form.values.sectionId !== data?.sectionId ||
        form.values.subsectionId !== data?.subsectionId ||
        form.values.roleId !== data?.roleId ||
        form.values.activated !== data?.activated ||
        form.values.birthday !== data?.birthday ||
        form.values.gender !== data?.gender
      )) || (!data && (
        form.values.userId !== "" ||
        form.values.name !== "" ||
        form.values.email !== "" ||
        form.values.sectionId !== "" ||
        form.values.subsectionId !== "" ||
        form.values.roleId !== "" ||
        form.values.activated !== false ||
        form.values.birthday !== "" ||
        form.values.gender !== true
      ))
    , [form.values, data]
  )

  const availableSubSections = useMemo(() => {
    return !sectionId
      ? null
      : subSections.filter((item) => item.sectionId === sectionId);
  }, [sectionId, subSections]);

  return (
    <Modal open={open} onClose={close}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <FormContainer sx={{ maxHeight: "90vh", padding: 2, paddingTop: 4 }}>
          <form onSubmit={form.handleSubmit}>
            <div className="flex items-center my-5">
              <p className="mr-5">{getLocaleString("activate_user")}</p>
              <Switch
                defaultChecked={data?.activated ?? false}
                onChange={handleToggle}
              />
            </div>
            <Box sx={{ maxHeight: "60vh", overflowY: "auto" }}>
              <TextField
                fullWidth
                label={getLocaleString("register_userId_label")}
                disabled={editing}
                placeholder={getLocaleString("register_userId_placeholder")}
                {...form.getFieldProps("userId")}
                helperText={getLocaleString(
                  form.errors.userId && form.touched.userId
                    ? form.errors.userId
                    : "",
                )}
                error={Boolean(form.errors.userId && form.touched.userId)}
                sx={{ mt: 1, mb: 3 }}
              />
              <FormTextField
                fullWidth
                label={getLocaleString("register_name_label")}
                placeholder={getLocaleString("register_name_placeholder")}
                {...form.getFieldProps("name")}
                helperText={getLocaleString(
                  form.errors.name && form.touched.name ? form.errors.name : "",
                )}
                error={Boolean(form.errors.name && form.touched.name)}
              />
              <FormTextField
                fullWidth
                label={getLocaleString("register_email_label")}
                placeholder={getLocaleString("register_email_placeholder")}
                {...form.getFieldProps("email")}
                helperText={getLocaleString(
                  form.errors.email && form.touched.email
                    ? form.errors.email
                    : "",
                )}
                error={Boolean(form.errors.email && form.touched.email)}
              />
              <Grid container columns={2}>
                <Grid item xs={1} sx={{ mb: 3, pr: 1 }}>
                  <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={{
                          ...(Boolean(
                            form.errors.birthday && form.touched.birthday,
                          )
                            ? {
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "red",
                                },
                              }
                            : {}),
                        }}
                        label={getLocaleString("register_birthday_label")}
                        placeholder={getLocaleString(
                          "register_birthday_placeholder",
                        )}
                        onChange={(newValue) => {
                          if (newValue) {
                            form.setFieldValue(
                              "birthday",
                              moment(newValue.$d).format("DD-MM-YYYY"),
                            );
                          } else {
                            form.setFieldValue("birthday", ""); // Reset to empty string if no date is selected
                          }
                        }}
                        value={
                          form.values.birthday
                            ? dayjs(form.values.birthday, "DD-MM-YYYY")
                            : null
                        } // Control value with Formik
                        helperText={getLocaleString(
                          form.errors.birthday && form.touched.birthday
                            ? form.errors.birthday
                            : "",
                        )}
                      />
                    </LocalizationProvider>
                    {Boolean(form.errors.birthday && form.touched.birthday) && (
                      <FormErrorText>
                        {getLocaleString(
                          form.errors.birthday && form.touched.birthday
                            ? form.errors.birthday
                            : "",
                        )}
                      </FormErrorText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={1} sx={{ mb: 3, pl: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="type-label">
                      {getLocaleString("register_gender_label")}
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type-select"
                      label={getLocaleString("register_gender_label")}
                      value={gender}
                      onChange={handleSetGender}
                      error={Boolean(form.errors.gender && form.touched.gender)}
                    >
                      <MenuItem value={true} key="male">
                        {getLocaleString("Male")}
                      </MenuItem>
                      <MenuItem value={false} key="female">
                        {getLocaleString("Female")}
                      </MenuItem>
                    </Select>
                    {Boolean(form.errors.gender && form.touched.gender) && (
                      <FormErrorText>
                        {getLocaleString("register_gender_required")}
                      </FormErrorText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <CustomFormControl fullWidth>
                <InputLabel id="section-label">
                  {getLocaleString("select_user_role_label")}
                </InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  label={getLocaleString("select_user_role_label")}
                  MenuProps={MenuProps}
                  {...form.getFieldProps("roleId")}
                  onChange={(e) => handleChangeRoleId(e)}
                >
                  {roles?.map((role) => (
                    <MenuItem key={role.id} value={role.id}>
                      {role.name}
                      {role.archived && (
                        <ArchivedChip
                          label={getLocaleString("common_table_archived")}
                          icon={<ArchivedIcon />}
                          color="warning"
                        />
                      )}
                    </MenuItem>
                  ))}
                </Select>
                {Boolean(
                  form.errors.roleId && form.touched.roleId
                    ? form.errors.roleId
                    : "",
                ) && (
                  <FormErrorText>
                    {getLocaleString("modal_role_required")}
                  </FormErrorText>
                )}
              </CustomFormControl>
              {!editing && (
                <FormTextField
                  fullWidth
                  type="password"
                  label={getLocaleString("login_password_label")}
                  placeholder={getLocaleString("login_password_placeholder")}
                  {...form.getFieldProps("password")}
                  helperText={getLocaleString(
                    form.errors.password && form.touched.password
                      ? form.errors.password
                      : "",
                  )}
                  error={Boolean(
                    form.errors.password && form.touched.password
                      ? form.errors.password
                      : "",
                  )}
                />
              )}
              {!editing && (
                <FormTextField
                  fullWidth
                  type="password"
                  label={getLocaleString("register_confirm_password_label")}
                  placeholder={getLocaleString(
                    "register_confirm_password_placeholder",
                  )}
                  {...form.getFieldProps("confirmPassword")}
                  helperText={getLocaleString(
                    form.errors.confirmPassword && form.touched.confirmPassword
                      ? form.errors.confirmPassword
                      : "",
                  )}
                  error={Boolean(
                    form.errors.confirmPassword && form.touched.confirmPassword
                      ? form.errors.confirmPassword
                      : "",
                  )}
                />
              )}
              <CustomFormControl fullWidth>
                <InputLabel id="section-label">
                  {getLocaleString("common_table_section")}
                </InputLabel>
                <Select
                  labelId="section-label"
                  id="section-select"
                  label={getLocaleString("common_table_section")}
                  MenuProps={MenuProps}
                  {...form.getFieldProps("sectionId")}
                  onChange={(e) => handleChangeSectionId(e)}
                >
                  <MenuItemContainer key="-1" value="" />
                  {sections?.map((section) => (
                    <MenuItem key={section.id} value={section.id}>
                      {section.name}
                      {section.archived && (
                        <ArchivedChip
                          label={getLocaleString("common_table_archived")}
                          icon={<ArchivedIcon />}
                          color="warning"
                        />
                      )}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>
              <CustomFormControl fullWidth>
                <InputLabel id="sub-section-label">
                  {getLocaleString("common_table_subsection")}
                </InputLabel>
                <Select
                  labelId="sub-section-label"
                  id="section-sub-select"
                  label={getLocaleString("common_table_subsection")}
                  MenuProps={MenuProps}
                  {...form.getFieldProps("subsectionId")}
                  onChange={(e) =>
                    form.setFieldValue("subsectionId", e.target.value)
                  }
                >
                  <MenuItemContainer key="-1" value="" />
                  {availableSubSections?.map((subSection) => (
                    <MenuItem key={subSection.id} value={subSection.id}>
                      {subSection.name}
                      {subSection.archived && (
                        <ArchivedChip
                          label={getLocaleString("common_table_archived")}
                          icon={<ArchivedIcon />}
                          color="warning"
                        />
                      )}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>
            </Box>
            <SubmitButton fullWidth type="submit" variant="contained" disabled={!isChanged}>
              {editing
                ? getLocaleString("common_save")
                : getLocaleString("common_create")}
            </SubmitButton>
          </form>
          <CloseButtonBox>
            <CloseIcon onClick={close} />
          </CloseButtonBox>
        </FormContainer>
      </Box>
    </Modal>
  );
};

export default CreateUserModal;
