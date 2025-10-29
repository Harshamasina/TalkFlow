'use client';

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

const SignOutButton = ({
  children = "Sign Out",
  disabled,
  onClick,
  ...buttonProps
}: ButtonProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick: NonNullable<ButtonProps["onClick"]> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    startTransition(async () => {
      await signOut();
      router.replace("/");
    });
  };

  return (
    <Button
      {...buttonProps}
      onClick={handleClick}
      disabled={disabled || isPending}
    >
      {isPending ? "Signing Out..." : children}
    </Button>
  );
};

export default SignOutButton;
