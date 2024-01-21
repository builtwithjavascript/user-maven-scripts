// file: src/user-maven-scripts/useUserMavenScripts.ts
export const useUserMavenScripts = (
  key: string,
  options?: {
    trackingHost?: string
    autocapture?: string
    privacyPolicy?: string
  }
) => {
  const trackingHost = options?.trackingHost || 'https://events.usermaven.com'
  const autocapture = options?.autocapture || 'true'
  const privacyPolicy = options?.privacyPolicy || 'strict'

  if ((key || '').trim().length === 0) {
    throw new Error('-------------- useUserMavenScripts -------------- EXCEPTION: invalid key argument.')
  }

  const script1 = {
    src: 'https://t.usermaven.com/lib.js',
    'data-key': `${key}`,
    'data-tracking-host': trackingHost,
    'data-autocapture': autocapture,
    'data-privacy-policy': privacyPolicy,
    defer: true
  }

  const script2 = {
    type: 'text/javascript',
    innerHTML:
      'window.usermaven = window.usermaven || (function(){(window.usermavenQ = window.usermavenQ || []).push(arguments);});',
    defer: true
  }

  return [script1, script2]
}
