"use client";
import { AI_NAME, AI_DESCRIPTION } from "@/features/theme/theme-config";
import { signIn } from "next-auth/react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";

interface LoginProps {
  isDevMode: boolean;
  githubEnabled: boolean;
  entraIdEnabled: boolean;
}

export const LogIn: FC<LoginProps> = (props) => {
  return (
    <Card className="flex gap-2 flex-col min-w-[350px] shadow-lg border-2 border-primary/20">
      <CardHeader className="gap-3 text-center">
        <CardTitle className="text-3xl flex gap-3 justify-center items-center">
          <Avatar className="h-10 w-10 bg-primary/10">
            <AvatarImage src={"ai-icon.png"} />
          </Avatar>
          <span className="text-primary font-bold">{AI_NAME}</span>
        </CardTitle>
        <CardDescription className="text-base">
          {AI_DESCRIPTION} Experience the future of AI-powered conversations.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="bg-primary/10 p-4 rounded-md text-sm text-center">
          Sign in to access your personalized AI chat experience
        </div>
        {props.githubEnabled && (
          <Button 
            onClick={() => signIn("github")}
            className="hover:bg-primary/90 transition-colors"
          >
            Sign in with GitHub
          </Button>
        )}
        {props.entraIdEnabled && (
          <Button 
            onClick={() => signIn("azure-ad")}
            className="hover:bg-primary/90 transition-colors"
          >
            Sign in with Microsoft 365
          </Button>
        )}
        {props.isDevMode && (
          <Button 
            onClick={() => signIn("localdev")}
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
          >
            Basic Auth (DEV ONLY)
          </Button>
        )}
      </CardContent>
      <CardFooter className="text-xs text-center justify-center text-muted-foreground">
        © {new Date().getFullYear()} Nong 9 AI Technologies. All rights reserved.
      </CardFooter>
    </Card>
  );
};
