import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { MenuItemContainer } from "../../components/Modal/style";
import { MenuProps } from "../../constants";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment/moment";
import dayjs from "dayjs";
import { ArchivedChip, ArchivedIcon, FormErrorText } from "../style";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";

const ProfileForm = ({ form, account, loading, isChanged }) => {
  const { t } = useTranslation();
  const sections = useSelector((state) => state.sectionReducer.sections);
  const roles = useSelector((state) => state.roleReducer.roles);
  const [gender, setGender] = useState(true);

  const [sectionId, setSectionId] = useState(0);

  const subSections = useSelector(
    (state) => state.subSectionReducer.subSections,
  );

  const handleChangeSectionId = (e) => {
    form.setFieldValue("sectionId", e.target.value);
    form.setFieldValue("subsectionId", "");
    setSectionId(e.target.value);
  };

  const handleChangeSubsectionId = (e) => {
    form.setFieldValue("subsectionId", e.target.value);
  };

  const availableSubSections = useMemo(() => {
    return !sectionId
      ? null
      : subSections.filter((item) => item.sectionId === sectionId);
  }, [sectionId, subSections]);

  const handleSetGender = (event) => {
    setGender(event.target.value);
    form.setFieldValue("gender", event.target.value);
  };

  useEffect(() => {
    setSectionId(account.sectionId);
  }, [account]);

  return (
    <Box>
      <Grid container columns={2}>
        <Grid item xs={1} sx={{ mb: 3, pr: 1 }}>
          <TextField
            fullWidth
            disabled
            label={t("register_userId_label")}
            placeholder={t("register_userId_placeholder")}
            {...form.getFieldProps("userId")}
            helperText={t(
              form.errors.userId && form.touched.userId
                ? form.errors.userId
                : "",
            )}
            error={Boolean(form.errors.userId && form.touched.userId)}
          />
        </Grid>
        <Grid item xs={1} sx={{ mb: 3, pl: 1 }}>
          <TextField
            fullWidth
            disabled
            label={t("register_email_label")}
            placeholder={t("register_email_placeholder")}
            {...form.getFieldProps("email")}
            helperText={t(
              form.errors.email && form.touched.email ? form.errors.email : "",
            )}
            error={Boolean(form.errors.email && form.touched.email)}
          />
        </Grid>

        <Grid item xs={2} sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label={t("register_name_label")}
            placeholder={t("register_name_placeholder")}
            {...form.getFieldProps("name")}
            helperText={t(
              form.errors.name && form.touched.name ? form.errors.name : "",
            )}
            error={Boolean(form.errors.name && form.touched.name)}
          />
        </Grid>

        <Grid item xs={2} sx={{ mb: 3 }}>
          <FormControl fullWidth disabled>
            <InputLabel id="section-label">
              {t("select_user_role_label")}
            </InputLabel>
            <Select
              labelId="role-label"
              id="role-select"
              label={t("select_user_role_label")}
              disabled
              MenuProps={MenuProps}
              {...form.getFieldProps("roleId")}
              onChange={(e) => form.setFieldValue("roleId", e.target.value)}
            >
              {roles?.map((role) => (
                <MenuItem key={role.id} value={role.id}>
                  {t(role.name)}
                  {role.archived && (
                    <ArchivedChip
                      label={t("common_table_archived")}
                      icon={<ArchivedIcon />}
                      color="warning"
                    />
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid container columns={2}>
          <Grid item xs={1} sx={{ mb: 3, pr: 1 }}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    ...(Boolean(form.errors.birthday && form.touched.birthday)
                      ? {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "red",
                          },
                        }
                      : {}),
                  }}
                  label={t("register_birthday_label")}
                  placeholder={t("register_birthday_placeholder")}
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
                  helperText={t(
                    form.errors.birthday && form.touched.birthday
                      ? form.errors.birthday
                      : "",
                  )}
                />
              </LocalizationProvider>
              {Boolean(form.errors.birthday && form.touched.birthday) && (
                <FormErrorText>
                  {t(
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
                {t("register_gender_label")}
              </InputLabel>
              <Select
                labelId="type-label"
                id="type-select"
                label={t("register_gender_label")}
                value={gender}
                onChange={handleSetGender}
                error={Boolean(form.errors.gender && form.touched.gender)}
              >
                <MenuItem value={true} key="male">
                  {t("Male")}
                </MenuItem>
                <MenuItem value={false} key="female">
                  {t("Female")}
                </MenuItem>
              </Select>
              {Boolean(form.errors.gender && form.touched.gender) && (
                <FormErrorText>{t("register_gender_required")}</FormErrorText>
              )}
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={2} sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="section-label">
              {t("common_table_section")}
            </InputLabel>
            <Select
              labelId="section-label"
              id="section-select"
              label={t("common_table_section")}
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
                      label={t("common_table_archived")}
                      icon={<ArchivedIcon />}
                      color="warning"
                    />
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={2} sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="sub-section-label">
              {t("common_table_subsection")}
            </InputLabel>
            <Select
              labelId="sub-section-label"
              id="section-sub-select"
              label={t("common_table_subsection")}
              MenuProps={MenuProps}
              {...form.getFieldProps("subsectionId")}
              onChange={(e) => handleChangeSubsectionId(e)}
            >
              <MenuItemContainer key="-1" value="" />
              {availableSubSections?.map((subSection) => (
                <MenuItem key={subSection.id} value={subSection.id}>
                  {subSection.name}
                  {subSection.archived && (
                    <ArchivedChip
                      label={t("common_table_archived")}
                      icon={<ArchivedIcon />}
                      color="warning"
                    />
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box className="actions">
        <LoadingButton
          loading={loading}
          disabled={!isChanged}
          onClick={form.submitForm}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          {t("common_save")}
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default ProfileForm;
