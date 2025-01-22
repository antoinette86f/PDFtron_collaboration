import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormTextField } from "./style";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { AuthService, ToastService } from "../../services";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("current_password_required"),
  password: Yup.string()
    .required("new_password_required")
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be no longer than 128 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "register_confirm_password_match")
    .required("confirmation_password_required"),
});

const ResetPasswordForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    AuthService.changePassword({
      currentPassword: form.values.currentPassword,
      password: form.values.password
    }).then((res) => {
      ToastService.success(t(res.message));
      form.resetForm();
    }).catch((err) => {
      console.log("err=>", err);
    }).finally(() => {
      setLoading(false);
    })
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <Box>
      <Box>
        <form onSubmit={form.handleSubmit}>
          <FormTextField
            fullWidth
            type="password"
            label={t("current_password")}
            placeholder={t("current_password_placeholder")}
            {...form.getFieldProps("currentPassword")}
            helperText={t(
              form.errors.currentPassword && form.touched.currentPassword
                ? form.errors.currentPassword
                : "",
            )}
            error={Boolean(
              form.errors.currentPassword && form.touched.currentPassword,
            )}
          />

          <FormTextField
            fullWidth
            type="password"
            label={t("new_password")}
            placeholder={t("new_password_placeholder")}
            {...form.getFieldProps("password")}
            helperText={t(
              form.errors.password && form.touched.password
                ? form.errors.password
                : "",
            )}
            error={Boolean(form.errors.password && form.touched.password)}
          />

          <FormTextField
            fullWidth
            type="password"
            label={t("confirmation_password")}
            placeholder={t("confirmation_password_placeholder")}
            {...form.getFieldProps("confirmPassword")}
            helperText={t(
              form.errors.confirmPassword && form.touched.confirmPassword
                ? form.errors.confirmPassword
                : "",
            )}
            error={Boolean(
              form.errors.confirmPassword && form.touched.confirmPassword,
            )}
          />
        </form>

        <Box className="actions">
          <LoadingButton
            loading={loading}
            disabled={!form.values.password || !form.isValid}
            onClick={form.submitForm}
            loadingPosition="center"
            variant="contained"
          >
            {t("common_reset_password")}
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
