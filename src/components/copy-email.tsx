import { useState } from "react";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { CopyIcon } from "@phosphor-icons/react/dist/csr/Copy";

import { Button } from "./ui/button";

interface CopyEmailProps {
  email: string;
  className?: string;
}

export function CopyEmail({ email, className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button type="button" variant="outline" onClick={copyEmail} aria-live="polite" className={className}>
      {copied ? <CheckIcon weight="bold" aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
      {copied ? "Copied" : "Copy email"}
    </Button>
  );
}
