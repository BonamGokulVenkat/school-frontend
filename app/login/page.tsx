import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Login to access your school portal"
      footerText="Don't have an account?"
      footerLinkText="Register"
      footerLinkHref="/register"
    >
      <LoginForm />
    </AuthLayout>
  );
}