import { z } from "zod"

/**
 * Common reusable field schemas
 */
export const nameField = z
  .string()
  .nonempty("This field is required")
  .min(2, "Must be at least 2 characters")
  .max(50, "Must be less than 50 characters")
  .regex(
    /^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/,
    "Only letters, spaces, apostrophes and hyphens are allowed"
  )

export const surnameField = z
  .string()
  .nonempty("This field is required")
  .min(2, "Must be at least 2 characters")
  .max(50, "Must be less than 50 characters")
  .regex(
    /^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/,
    "Only letters, spaces, apostrophes and hyphens are allowed"
  )

export const emailField = z
  .string()
  .nonempty("Email is required")
  .email("Please enter a valid email address")

export const passwordField = z
  .string()
  .nonempty("Password is required")
  .min(8, "Password must be at least 8 characters")
  .max(100, "Password must be less than 100 characters")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[0-9]/, "Must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Must contain at least one special character")

export const phoneField = z
  .string()
  .nonempty("Phone number is required")
  .regex(/^\+?[0-9]{7,15}$/, "Must be a valid phone number with 7-15 digits")

/**
 * Full form schemas
 */

// Example: registration form
export const registrationSchema = z.object({
  firstName: nameField,
  lastName: surnameField,
  email: emailField,
  password: passwordField,
  phone: phoneField.optional() // optional field
})

// Example: simple contact form
export const contactFormSchema = z.object({
  name: nameField,
  email: emailField,
  message: z
    .string()
    .nonempty("Message is required")
    .max(500, "Message is too long")
})

/**
 * Newsletter form schema
 * Designed for ThemedForm NewsletterForm component
 */
export const newsletterSchema = z.object({
  name: nameField,
  surname: surnameField,
  email: emailField
})
