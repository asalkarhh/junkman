import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle2, Loader2, TriangleAlert, Upload } from 'lucide-react'
import Button from '../common/Button'
import { serviceOptionsForForm } from '../../data/services'
import { submitQuoteRequest } from '../../utils/submitQuote'
import { business } from '../../data/business'

const fieldClass =
  'w-full rounded-[var(--radius-btn)] border border-border bg-white px-3.5 py-3 text-sm text-ink outline-none transition focus:border-accent'
const labelClass = 'mb-1.5 block text-sm font-semibold text-ink'
const errorClass = 'mt-1 text-xs font-medium text-error'

export default function QuoteForm() {
  const [status, setStatus] = useState('idle')
  const [serverMessage, setServerMessage] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      servicesNeeded: '',
      propertyAddress: '',
      details: '',
      photo: null,
    },
  })

  const onSubmit = async (values) => {
    setStatus('loading')
    setServerMessage('')

    try {
      const photoName = values.photo?.[0]?.name || null
      const result = await submitQuoteRequest({
        ...values,
        photoName,
        photo: undefined,
        submittedAt: new Date().toISOString(),
      })
      setStatus('success')
      setServerMessage(
        result.message ||
          `Thanks! We received your request. For the fastest response, call or text ${business.phoneDisplay}.`,
      )
      reset()
    } catch (error) {
      setStatus('error')
      setServerMessage(
        error?.message ||
          'Something went wrong while preparing your request. Please call or text us directly.',
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-surface space-y-5 p-5 sm:p-7"
      noValidate
      aria-describedby="form-status"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-error">*</span>
          </label>
          <input
            id="firstName"
            className={fieldClass}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            {...register('firstName', { required: 'First name is required.' })}
          />
          {errors.firstName ? <p className={errorClass}>{errors.firstName.message}</p> : null}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-error">*</span>
          </label>
          <input
            id="lastName"
            className={fieldClass}
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            {...register('lastName', { required: 'Last name is required.' })}
          />
          {errors.lastName ? <p className={errorClass}>{errors.lastName.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-error">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={fieldClass}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            {...register('phone', {
              required: 'Phone number is required.',
              minLength: { value: 7, message: 'Enter a valid phone number.' },
            })}
          />
          {errors.phone ? <p className={errorClass}>{errors.phone.message}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register('email', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address.',
              },
            })}
          />
          {errors.email ? <p className={errorClass}>{errors.email.message}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="servicesNeeded" className={labelClass}>
          Services Needed <span className="text-error">*</span>
        </label>
        <select
          id="servicesNeeded"
          className={fieldClass}
          aria-invalid={Boolean(errors.servicesNeeded)}
          {...register('servicesNeeded', { required: 'Please select a service.' })}
        >
          <option value="">Select a service</option>
          {serviceOptionsForForm.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value="Multiple / Other">Multiple / Other</option>
        </select>
        {errors.servicesNeeded ? <p className={errorClass}>{errors.servicesNeeded.message}</p> : null}
      </div>

      <div>
        <label htmlFor="propertyAddress" className={labelClass}>
          Property Address <span className="text-error">*</span>
        </label>
        <input
          id="propertyAddress"
          className={fieldClass}
          autoComplete="street-address"
          aria-invalid={Boolean(errors.propertyAddress)}
          {...register('propertyAddress', { required: 'Property address is required.' })}
        />
        {errors.propertyAddress ? <p className={errorClass}>{errors.propertyAddress.message}</p> : null}
      </div>

      <div>
        <label htmlFor="details" className={labelClass}>
          Additional Details
        </label>
        <textarea
          id="details"
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder="What needs to be removed? Stairs, access notes, preferred timing..."
          {...register('details')}
        />
      </div>

      <div>
        <label htmlFor="photo" className={labelClass}>
          Optional Photo Upload
        </label>
        <label
          htmlFor="photo"
          className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-btn)] border border-dashed border-border bg-surface px-4 py-4 text-sm text-muted hover:border-accent"
        >
          <Upload className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>Add a photo of the items or space (optional)</span>
        </label>
        <input
          id="photo"
          type="file"
          accept="image/*"
          className="sr-only"
          {...register('photo')}
        />
      </div>

      <div id="form-status" aria-live="polite" className="space-y-3">
        {status === 'success' ? (
          <div className="flex items-start gap-2 rounded-lg border border-success/20 bg-success/10 px-3 py-3 text-sm text-success">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p>{serverMessage}</p>
          </div>
        ) : null}
        {status === 'error' ? (
          <div className="flex items-start gap-2 rounded-lg border border-error/20 bg-error/10 px-3 py-3 text-sm text-error">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p>{serverMessage}</p>
          </div>
        ) : null}
        <p className="text-xs text-muted">
          Form delivery can be connected to EmailJS, Formspree, or a backend API. Until then, call or text{' '}
          <a href={`tel:${business.phoneTel}`} className="font-semibold text-ink underline-offset-2 hover:underline">
            {business.phoneDisplay}
          </a>{' '}
          for the fastest quote.
        </p>
      </div>

      <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting || status === 'loading'}>
        {isSubmitting || status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          'Get My Free Quote'
        )}
      </Button>
    </form>
  )
}
