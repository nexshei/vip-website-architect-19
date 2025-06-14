
export function validateTextField(value: string, max: number = 500): boolean {
  return typeof value === "string" && value.length > 0 && value.length <= max;
}

export function validateEmail(value: string): boolean {
  // Very simple email regex, backend should use more robust in production
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export function validatePhone(value: string): boolean {
  // Basic Kenya phone check; customize regex as needed
  return /^(\+254|0)?[17]\d{8}$/.test(value.trim());
}

// Anti-spam: in-memory local throttling, client-side only! (real rate limit must be backend)
const submissionTimestamps: Record<string, number> = {};

export function canSubmit(formKey: string, minIntervalMs = 12000): boolean {
  const now = Date.now();
  const lastSubmit = submissionTimestamps[formKey] || 0;
  if (now - lastSubmit < minIntervalMs) {
    return false;
  }
  submissionTimestamps[formKey] = now;
  return true;
}
