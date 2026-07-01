import { AuthLayout } from "@/components/auth/AuthLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join the EduNexus community"
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLinkHref="/login"
    >
      <RegisterForm />
    </AuthLayout>
  );
}