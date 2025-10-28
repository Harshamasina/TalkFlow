'use client';

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SignOut = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleSignOut = () => {
        startTransition(async () => {
            await signOut();
            router.replace("/");
        });
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className="btn-destructive">Sign out</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Sign out of TalkFlow</AlertDialogTitle>
                    <AlertDialogDescription>
                        You will need to sign in again to continue practicing interviews. Are you sure you want to sign out?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isPending}>Stay Logged In</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSignOut} disabled={isPending}>
                        {isPending ? "Signing out..." : "Sign Out"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default SignOut;
