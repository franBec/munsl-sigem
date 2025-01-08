"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "@/app/auth/login/_component/LoginForm";
import { SigemLogo } from "@/components/logo/sigem-logo";

const Page = () => {
  const router = useRouter();
  const { status } = useSession();
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden">
            <CardContent className="grid grid-cols-1 md:grid-cols-[1fr_min-content_1fr] p-0">
              <div className="p-6 md:p-8">
                <LoginForm />
              </div>
              <div className="hidden md:block bg-border w-px"></div>
              <div className="hidden md:flex items-center justify-center p-6 md:p-8">
                <SigemLogo />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
