import { AuthLayout } from "@/components/auth/AuthLayout";
import { ForgotPasswordForm } from "@/components/auth/ForgetPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="We'll help you get back into your account"
      footerText="Remember your password?"
      footerLinkText="Login"
      footerLinkHref="/login"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}