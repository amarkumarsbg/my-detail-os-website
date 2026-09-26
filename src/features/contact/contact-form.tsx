"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import { submitContactPublic } from "@/services/contact";
import { mapApiError } from "@/lib/error-messages";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";

export function ContactForm() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setStatus(null);

    try {
      const result = await submitContactPublic({
        name: name.trim(),
        businessName: businessName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });
      setStatus(result.message);
    } catch (err) {
      setError(mapApiError(err));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-teal-900/10 bg-white/90 p-6 shadow-lg shadow-teal-900/5 backdrop-blur-sm sm:p-8">
      <div className="grid gap-x-4 sm:grid-cols-2">
        <div>
          <FloatingInput id="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <FloatingInput
            id="businessName"
            label="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />
        </div>
        <div>
          <FloatingInput id="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <FloatingInput id="phone" label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          className="min-h-28 w-full rounded-xl border border-input bg-white px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <Button type="submit" size="lg" disabled={isLoading} className="w-full sm:w-auto">
        {isLoading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending message...
          </>
        ) : (
          "Submit"
        )}
      </Button>

      {error && (
        <Alert tone="error">
          <AlertTitle>Unable to submit</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {status && (
        <Alert tone="success">
          <AlertTitle>Submitted</AlertTitle>
          <AlertDescription>{status}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
