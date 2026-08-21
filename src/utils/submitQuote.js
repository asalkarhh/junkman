/**
 * Quote submission abstraction.
 * Connect EmailJS, Formspree, or a backend endpoint here later.
 * Currently returns a simulated success so the UI states can be tested.
 */
export async function submitQuoteRequest(payload) {
  // TODO: Replace with real provider integration.
  // Example Formspree:
  // const response = await fetch('https://formspree.io/f/YOUR_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  //   body: JSON.stringify(payload),
  // })
  // if (!response.ok) throw new Error('Unable to send your request.')
  // return response.json()

  await new Promise((resolve) => setTimeout(resolve, 900))

  if (!payload?.phone || !payload?.firstName || !payload?.servicesNeeded) {
    throw new Error('Missing required fields.')
  }

  if (import.meta.env.DEV) {
    console.info('Quote request (not yet connected to email service):', payload)
  }

  return {
    ok: true,
    message:
      'Thanks! Your request was prepared successfully. Connect an email service to deliver submissions live.',
  }
}
