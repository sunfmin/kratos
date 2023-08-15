// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type OryKratosConfiguration = OryKratosConfiguration1 &
  OryKratosConfiguration2
export type OryKratosConfiguration1 = {
  [k: string]: unknown | undefined
}
/**
 * Ory Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. Read this [article for more information on browser redirects](https://www.ory.sh/kratos/docs/concepts/browser-redirect-flow-completion).
 */
export type RedirectBrowsersToSetURLPerDefault = string
/**
 * List of URLs that are allowed to be redirected to. A redirection request is made by appending `?return_to=...` to Login, Registration, and other self-service flows.
 */
export type AllowedReturnToURLs = string[]
/**
 * URL where the Settings UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).
 */
export type URLOfTheSettingsPage = string
/**
 * Sets what Authenticator Assurance Level (used for 2FA) is required to access this feature. If set to `highest_available` then this endpoint requires the highest AAL the identity has set up. If set to `aal1` then the identity can access this feature without 2FA.
 */
export type RequiredAuthenticatorAssuranceLevel = "aal1" | "highest_available"
/**
 * Define what the hook should do
 */
export type WebHookConfiguration =
  | {
      [k: string]: unknown | undefined
    }
  | {
      can_interrupt?: false
      [k: string]: unknown | undefined
    }
export type SelfServiceHooks = SelfServiceWebHook[]
/**
 * If set to true will enable [User Registration](https://www.ory.sh/kratos/docs/self-service/flows/user-registration/).
 */
export type EnableUserRegistration = boolean
/**
 * URL where the Registration UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).
 */
export type RegistrationUIURL = string
/**
 * URL where the Login UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).
 */
export type LoginUIURL = string
/**
 * If set to true will enable [Email and Phone Verification and Account Activation](https://www.ory.sh/kratos/docs/self-service/flows/verify-email-account-activation/).
 */
export type EnableEmailPhoneVerification = boolean
/**
 * URL where the Ory Verify UI is hosted. This is the page where users activate and / or verify their email or telephone number. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).
 */
export type VerifyUIURL = string
/**
 * Sets how long the verification request (for the UI interaction) is valid.
 */
export type SelfServiceVerificationRequestLifespan = string
/**
 * The strategy to use for verification requests
 */
export type VerificationStrategy = "link" | "code"
/**
 * Whether to notify recipients, if verification was requested for their address.
 */
export type NotifyUnknownRecipients = boolean
/**
 * If set to true will enable [Account Recovery](https://www.ory.sh/kratos/docs/self-service/flows/password-reset-account-recovery/).
 */
export type EnableAccountRecovery = boolean
/**
 * URL where the Ory Recovery UI is hosted. This is the page where users request and complete account recovery. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).
 */
export type RecoveryUIURL = string
export type SelfServiceAfterRecoveryHooks = (
  | SelfServiceWebHook
  | SelfServiceSessionRevokerHook
)[]
/**
 * Sets how long the recovery request is valid. If expired, the user has to redo the flow.
 */
export type SelfServiceRecoveryRequestLifespan = string
/**
 * The strategy to use for recovery requests
 */
export type RecoveryStrategy = "link" | "code"
/**
 * Whether to notify recipients, if recovery was requested for their account.
 */
export type NotifyUnknownRecipients1 = boolean
/**
 * URL where the Ory Kratos Error UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).
 */
export type OryKratosErrorUIURL = string
export type EnablesProfileManagementMethod = boolean
export type EnablesLinkMethod = boolean
export type OverrideTheBaseURLWhichShouldBeUsedAsTheBaseForRecoveryAndVerificationLinks =
  string
export type HowLongALinkIsValidFor = string
export type EnablesCodeMethod = boolean
export type HowLongACodeIsValidFor = string
export type EnablesUsernameEmailAndPasswordMethod = boolean
/**
 * Allows changing the default HIBP host to a self hosted version.
 */
export type CustomHaveibeenpwnedHost = string
/**
 * If set to false the password validation does not utilize the Have I Been Pwnd API.
 */
export type EnableTheHaveIBeenPwnedAPI = boolean
/**
 * Defines how often a password may have been breached before it is rejected.
 */
export type AllowPasswordBreaches = number
/**
 * If set to false the password validation fails when the network or the Have I Been Pwnd API is down.
 */
export type IgnoreLookupNetworkErrors = boolean
/**
 * Defines the minimum length of the password.
 */
export type MinimumPasswordLength = number
/**
 * If set to false the password validation does not check for similarity between the password and the user identifier.
 */
export type EnablePasswordIdentifierSimilarityCheck = boolean
export type EnablesTheTOTPMethod = boolean
/**
 * The issuer (e.g. a domain name) will be shown in the TOTP app (e.g. Google Authenticator). It helps the user differentiate between different codes.
 */
export type TOTPIssuer = string
export type EnablesTheLookupSecretMethod = boolean
export type EnablesTheWebAuthnMethod = boolean
/**
 * If enabled will have the effect that WebAuthn is used for passwordless flows (as a first factor) and not for multi-factor set ups. With this set to true, users will see an option to sign up with WebAuthn on the registration screen.
 */
export type UseForPasswordlessFlows = boolean
/**
 * An name to help the user identify this RP.
 */
export type RelyingPartyDisplayName = string
/**
 * The id must be a subset of the domain currently in the browser.
 */
export type RelyingPartyIdentifier = string
/**
 * An explicit RP origin. If left empty, this defaults to `id`.
 */
export type RelyingPartyOrigin = string
/**
 * An icon to help the user identify this RP.
 */
export type RelyingPartyIcon = string
export type EnablesOpenIDConnectMethod = boolean
/**
 * Can be used to modify the base URL for OAuth2 Redirect URLs. If unset, the Public Base URL will be used.
 */
export type BaseURLForOAuth2RedirectURIs = string
export type SelfServiceOIDCProvider = SelfServiceOIDCProvider1 & {
  id: string
  provider: Provider
  label?: OptionalStringWhichWillBeUsedWhenGeneratingLabelsForUIButtons
  client_id: string
  client_secret?: string
  issuer_url?: string
  auth_url?: string
  token_url?: string
  mapper_url: JsonnetMapperURL
  scope?: string[]
  microsoft_tenant?: AzureADTenant
  subject_source?: MicrosoftSubjectSource
  apple_team_id?: AppleDeveloperTeamID
  apple_private_key_id?: ApplePrivateKeyIdentifier
  apple_private_key?: ApplePrivateKey
  requested_claims?: OpenIDConnectClaims
}
export type SelfServiceOIDCProvider1 = {
  [k: string]: unknown | undefined
} & {
  [k: string]: unknown | undefined
}
/**
 * Can be one of github, github-app, gitlab, generic, google, microsoft, discord, slack, facebook, auth0, vk, yandex, apple, spotify, netid, dingtalk, patreon.
 */
export type Provider =
  | "github"
  | "github-app"
  | "gitlab"
  | "generic"
  | "google"
  | "microsoft"
  | "discord"
  | "slack"
  | "facebook"
  | "auth0"
  | "vk"
  | "yandex"
  | "apple"
  | "spotify"
  | "netid"
  | "dingtalk"
  | "patreon"
  | "linkedin"
export type OptionalStringWhichWillBeUsedWhenGeneratingLabelsForUIButtons =
  string
/**
 * The URL where the jsonnet source is located for mapping the provider's data to Ory Kratos data.
 */
export type JsonnetMapperURL = string
/**
 * The Azure AD Tenant to use for authentication.
 */
export type AzureADTenant = string
/**
 * Controls which source the subject identifier is taken from by microsoft provider. If set to `userinfo` (the default) then the identifier is taken from the `sub` field of OIDC ID token or data received from `/userinfo` standard OIDC endpoint. If set to `me` then the `id` field of data structure received from `https://graph.microsoft.com/v1.0/me` is taken as an identifier.
 */
export type MicrosoftSubjectSource = "userinfo" | "me"
/**
 * Apple Developer Team ID needed for generating a JWT token for client secret
 */
export type AppleDeveloperTeamID = string
/**
 * Sign In with Apple Private Key Identifier needed for generating a JWT token for client secret
 */
export type ApplePrivateKeyIdentifier = string
/**
 * Sign In with Apple Private Key needed for generating a JWT token for client secret
 */
export type ApplePrivateKey = string
/**
 * A list and configuration of OAuth2 and OpenID Connect providers Ory Kratos should integrate with.
 */
export type OpenIDConnectAndOAuth2Providers = SelfServiceOIDCProvider[]
/**
 * Controls how many records should be purged from one table during database cleanup task
 */
export type NumberOfRecordsToCleanInOneIteration = number
/**
 * Controls the delay time between cleaning each table in one cleanup iteration
 */
export type DelayBetweenEachTableCleanups = string
/**
 * Controls how old records do we want to leave
 */
export type RemoveRecordsOlderThan = string
/**
 * DSN is used to specify the database credentials as a connection URI.
 */
export type DataSourceName = string
/**
 * You can override certain or all message templates by pointing this key to the path where the templates are located.
 */
export type OverrideMessageTemplates = string
/**
 * This URI will be used to connect to the SMTP server. Use the scheme smtps for implicit TLS sessions or smtp for explicit StartTLS/cleartext sessions. Please note that TLS is always enforced with certificate trust verification by default for security reasons on both schemes. With the smtp scheme you can use the query parameter (`?disable_starttls=true`) to allow cleartext sessions or (`?disable_starttls=false`) to enforce StartTLS (default behaviour). Additionally, use the query parameter to allow (`?skip_ssl_verify=true`) or disallow (`?skip_ssl_verify=false`) self-signed TLS certificates (default behaviour) on both implicit and explicit TLS sessions.
 */
export type SMTPConnectionString = string
/**
 * Path of the client X.509 certificate, in case of certificate based client authentication to the SMTP server.
 */
export type SMTPClientCertificatePath = string
/**
 * Path of the client certificate private key, in case of certificate based client authentication to the SMTP server
 */
export type SMTPClientPrivateKeyPath = string
/**
 * The recipient of an email will see this as the sender address.
 */
export type SMTPSenderAddress = string
/**
 * The recipient of an email will see this as the sender name.
 */
export type SMTPSenderName = string
/**
 * Identifier used in the SMTP HELO/EHLO command. Some SMTP relays require a unique identifier.
 */
export type SMTPHELOEHLOName = string
/**
 * The recipient of a sms will see this as the sender address.
 */
export type SMSSenderAddress = string
/**
 * This URL will be used to connect to the SMS provider.
 */
export type HTTPAddressOfAPIEndpoint = string
/**
 * Define which auth mechanism to use for auth with the SMS provider
 */
export type AuthMechanisms =
  | WebHookAuthApiKeyProperties
  | WebHookAuthBasicAuthProperties
/**
 * If set, the login and registration flows will handle the Ory OAuth 2.0 & OpenID `login_challenge` query parameter to serve as an OpenID Connect Provider. This URL should point to Ory Hydra when you are not running on the Ory Network and be left untouched otherwise.
 */
export type OAuth20ProviderURL = string
/**
 * Disable request logging for /health/alive and /health/ready endpoints
 */
export type DisableHealthEndpointsRequestLogging = boolean
/**
 * The URL where the admin endpoint is exposed at.
 */
export type AdminBaseURL = string
/**
 * The host (interface) kratos' admin endpoint listens on.
 */
export type AdminHost = string
/**
 * The port kratos' admin endpoint listens on.
 */
export type AdminPort = number
export type PrivateKeyPEM = TlsxSource
export type PathToPEMEncodedFle = string
/**
 * The base64 string of the PEM-encoded file content. Can be generated using for example `base64 -i path/to/file.pem`.
 */
export type Base64EncodedInline = string
export type TLSCertificatePEM = TlsxSource
/**
 * Disable request logging for /health/alive and /health/ready endpoints
 */
export type DisableHealthEndpointsRequestLogging1 = boolean
/**
 * The URL where the endpoint is exposed at. This domain is used to generate redirects, form URLs, and more.
 */
export type BaseURL = string
/**
 * The host (interface) kratos' public endpoint listens on.
 */
export type PublicHost = string
/**
 * The port kratos' public endpoint listens on.
 */
export type PublicPort = number
/**
 * If set will leak sensitive values (e.g. emails) in the logs.
 */
export type LeakSensitiveLogValues = boolean
/**
 * Text to use, when redacting sensitive log value.
 */
export type SensitiveLogValueRedactionText = string
/**
 * This Identity Schema will be used as the default for self-service flows. Its ID needs to exist in the "schemas" list.
 */
export type TheDefaultIdentitySchema = string
/**
 * Note that identities that used the "default_schema_url" field in older kratos versions will be corrupted unless you specify their schema url with the id "default" in this list.
 *
 * @minItems 1
 */
export type AllJSONSchemasForIdentityTraits = [
  {
    id: TheSchemaSID
    url: JSONSchemaURLForIdentityTraitsSchema
    [k: string]: unknown | undefined
  },
  ...{
    id: TheSchemaSID
    url: JSONSchemaURLForIdentityTraitsSchema
    [k: string]: unknown | undefined
  }[],
]
export type TheSchemaSID = string
/**
 * URL for JSON Schema which describes a identity's traits. Can be a file path, a https URL, or a base64 encoded string.
 */
export type JSONSchemaURLForIdentityTraitsSchema = string
/**
 * The first secret in the array is used for signing and encrypting things while all other keys are used to verify and decrypt older things that were signed with that old secret.
 */
export type DefaultEncryptionSigningSecrets = string[]
/**
 * The first secret in the array is used for encrypting cookies while all other keys are used to decrypt older cookies that were signed with that old secret.
 */
export type SigningKeysForCookies = string[]
/**
 * The first secret in the array is used for encryption data while all other keys are used to decrypt older data that were signed with.
 *
 * @minItems 1
 */
export type SecretsToUseForEncryptionByCipher = [string, ...string[]]
/**
 * One of the values: argon2, bcrypt.
 * Any other hashes will be migrated to the set algorithm once an identity authenticates using their password.
 */
export type PasswordHashingAlgorithm = "argon2" | "bcrypt"
/**
 * One of the values: noop, aes, xchacha20-poly1305
 */
export type CipheringAlgorithm = "noop" | "aes" | "xchacha20-poly1305"
/**
 * Sets the cookie domain for session and CSRF cookies. Useful when dealing with subdomains. Use with care!
 */
export type HTTPCookieDomain = string
/**
 * Sets the session and CSRF cookie path. Use with care!
 */
export type HTTPCookiePath = string
/**
 * Sets the session and CSRF cookie SameSite.
 */
export type HTTPCookieSameSiteConfiguration = "Strict" | "Lax" | "None"
/**
 * Defines how long a session is active. Once that lifespan has been reached, the user needs to sign in again.
 */
export type SessionLifespan = string
/**
 * Sets the session cookie domain. Useful when dealing with subdomains. Use with care! Overrides `cookies.domain`.
 */
export type SessionCookieDomain = string
/**
 * Sets the session cookie name. Use with care!
 */
export type SessionCookieName = string
/**
 * If set to true will persist the cookie in the end-user's browser using the `max-age` parameter which is set to the `session.lifespan` value. Persistent cookies are not deleted when the browser is closed (e.g. on reboot or alt+f4). This option affects the Ory OAuth2 and OpenID Provider's remember feature as well.
 */
export type MakeSessionCookiePersistent = boolean
/**
 * Sets the session cookie path. Use with care! Overrides `cookies.path`.
 */
export type SessionCookiePath = string
/**
 * Sets the session cookie SameSite. Overrides `cookies.same_site`.
 */
export type SessionCookieSameSiteConfiguration = "Strict" | "Lax" | "None"
/**
 * Sets when a session can be extended. Settings this value to `24h` will prevent the session from being extended before until 24 hours before it expires. This setting prevents excessive writes to the database. We highly recommend setting this value.
 */
export type EarliestPossibleSessionExtension = string
/**
 * SemVer according to https://semver.org/ prefixed with `v` as in our releases.
 */
export type TheKratosVersionThisConfigIsWrittenFor = string
/**
 * The port the courier's metrics endpoint listens on (0/disabled by default). This is a CLI flag and environment variable and can not be set using the config file.
 */
export type MetricsPort = number
/**
 * Disallow all outgoing HTTP calls to private IP ranges. This feature can help protect against SSRF attacks.
 */
export type DisallowPrivateIPRanges = boolean
/**
 * Allows the given URLs to be called despite them being in the private IP range. URLs need to have an exact and case-sensitive match to be excempt.
 */
export type AddExemptURLsToPrivateIPRanges = string[]
/**
 * If enabled allows Ory Sessions to be cached. Only effective in the Ory Network.
 */
export type EnableOrySessionsCaching = boolean

export interface OryKratosConfiguration2 {
  selfservice: {
    default_browser_return_url: RedirectBrowsersToSetURLPerDefault
    allowed_return_urls?: AllowedReturnToURLs
    flows?: {
      settings?: {
        ui_url?: URLOfTheSettingsPage
        lifespan?: string
        privileged_session_max_age?: string
        required_aal?: RequiredAuthenticatorAssuranceLevel
        after?: SelfServiceAfterSettings
        before?: SelfServiceBeforeSettings
      }
      logout?: {
        after?: {
          default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
        }
      }
      registration?: {
        enabled?: EnableUserRegistration
        ui_url?: RegistrationUIURL
        lifespan?: string
        before?: SelfServiceBeforeRegistration
        after?: SelfServiceAfterRegistration
        login_hints?: boolean
      }
      login?: {
        ui_url?: LoginUIURL
        lifespan?: string
        before?: SelfServiceBeforeLogin
        after?: SelfServiceAfterLogin
      }
      verification?: EmailAndPhoneVerificationAndAccountActivationConfiguration
      recovery?: AccountRecoveryConfiguration
      error?: {
        ui_url?: OryKratosErrorUIURL
      }
    }
    methods?: {
      profile?: {
        enabled?: EnablesProfileManagementMethod
      }
      link?: {
        enabled?: EnablesLinkMethod
        config?: LinkConfiguration
      }
      code?: {
        enabled?: EnablesCodeMethod
        config?: CodeConfiguration
      }
      password?: {
        enabled?: EnablesUsernameEmailAndPasswordMethod
        config?: PasswordConfiguration
      }
      totp?: {
        enabled?: EnablesTheTOTPMethod
        config?: TOTPConfiguration
      }
      lookup_secret?: {
        enabled?: EnablesTheLookupSecretMethod
      }
      webauthn?: {
        enabled?: EnablesTheWebAuthnMethod
        config?: WebAuthnConfiguration
      }
      oidc?: SpecifyOpenIDConnectAndOAuth2Configuration
    }
  }
  database?: DatabaseRelatedConfiguration
  dsn: DataSourceName
  courier?: CourierConfiguration
  oauth2_provider?: OAuth2ProviderConfiguration
  serve?: {
    admin?: {
      request_log?: {
        disable_for_health?: DisableHealthEndpointsRequestLogging
      }
      base_url?: AdminBaseURL
      host?: AdminHost
      port?: AdminPort
      socket?: Socket
      tls?: HTTPS
    }
    public?: {
      request_log?: {
        disable_for_health?: DisableHealthEndpointsRequestLogging1
      }
      /**
       * Configures Cross Origin Resource Sharing for public endpoints.
       */
      cors?: {
        /**
         * Sets whether CORS is enabled.
         */
        enabled?: boolean
        /**
         * A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Only one wildcard can be used per origin.
         */
        allowed_origins?: ((string | "*") & string)[]
        /**
         * A list of HTTP methods the user agent is allowed to use with cross-domain requests.
         */
        allowed_methods?: (
          | "POST"
          | "GET"
          | "PUT"
          | "PATCH"
          | "DELETE"
          | "CONNECT"
          | "HEAD"
          | "OPTIONS"
          | "TRACE"
        )[]
        /**
         * A list of non simple headers the client is allowed to use with cross-domain requests.
         */
        allowed_headers?: string[]
        /**
         * Sets which headers are safe to expose to the API of a CORS API specification.
         */
        exposed_headers?: string[]
        /**
         * Sets whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.
         */
        allow_credentials?: boolean
        /**
         * TODO
         */
        options_passthrough?: boolean
        /**
         * Sets how long (in seconds) the results of a preflight request can be cached. If set to 0, every request is preceded by a preflight request.
         */
        max_age?: number
        /**
         * Adds additional log output to debug server side CORS issues.
         */
        debug?: boolean
      }
      base_url?: BaseURL
      host?: PublicHost
      port?: PublicPort
      socket?: Socket
      tls?: HTTPS
    }
  }
  tracing?: OryTracingConfig
  log?: Log
  identity: {
    default_schema_id?: TheDefaultIdentitySchema
    schemas: AllJSONSchemasForIdentityTraits
  }
  secrets?: {
    default?: DefaultEncryptionSigningSecrets
    cookie?: SigningKeysForCookies
    cipher?: SecretsToUseForEncryptionByCipher
  }
  hashers?: HashingAlgorithmConfiguration
  ciphers?: CipherAlgorithmConfiguration
  cookies?: HTTPCookieConfiguration
  session?: {
    whoami?: WhoAmIToSessionSettings
    lifespan?: SessionLifespan
    cookie?: {
      domain?: SessionCookieDomain
      name?: SessionCookieName
      persistent?: MakeSessionCookiePersistent
      path?: SessionCookiePath
      same_site?: SessionCookieSameSiteConfiguration
    }
    earliest_possible_extend?: EarliestPossibleSessionExtension
  }
  version?: TheKratosVersionThisConfigIsWrittenFor
  dev?: boolean
  help?: boolean
  /**
   * This is a CLI flag and environment variable and can not be set using the config file.
   */
  "sqa-opt-out"?: boolean
  /**
   * This is a CLI flag and environment variable and can not be set using the config file.
   */
  "watch-courier"?: boolean
  "expose-metrics-port"?: MetricsPort
  /**
   * This is a CLI flag and environment variable and can not be set using the config file.
   */
  config?: string[]
  clients?: GlobalOutgoingNetworkSettings
  feature_flags?: FeatureFlags
}
export interface SelfServiceAfterSettings {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  password?: SelfServiceAfterSettingsMethod
  profile?: SelfServiceAfterSettingsMethod
  hooks?: SelfServiceHooks
}
export interface SelfServiceAfterSettingsMethod {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  hooks?: SelfServiceWebHook[]
}
export interface SelfServiceWebHook {
  hook: "web_hook"
  config: WebHookConfiguration
}
export interface SelfServiceBeforeSettings {
  hooks?: SelfServiceHooks
}
export interface SelfServiceBeforeRegistration {
  hooks?: SelfServiceHooks
}
export interface SelfServiceAfterRegistration {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  password?: SelfServiceAfterRegistrationMethod
  webauthn?: SelfServiceAfterRegistrationMethod
  oidc?: SelfServiceAfterRegistrationMethod
  hooks?: SelfServiceHooks
}
export interface SelfServiceAfterRegistrationMethod {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  hooks?: (SelfServiceSessionIssuerHook | SelfServiceWebHook)[]
}
export interface SelfServiceSessionIssuerHook {
  hook: "session"
}
export interface SelfServiceBeforeLogin {
  hooks?: SelfServiceHooks
}
export interface SelfServiceAfterLogin {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  password?: SelfServiceAfterDefaultLoginMethod
  webauthn?: SelfServiceAfterDefaultLoginMethod
  oidc?: SelfServiceAfterOIDCLoginMethod
  hooks?: (
    | SelfServiceWebHook
    | SelfServiceSessionRevokerHook
    | SelfServiceRequireVerifiedAddressHook
  )[]
}
export interface SelfServiceAfterDefaultLoginMethod {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  hooks?: (
    | SelfServiceSessionRevokerHook
    | SelfServiceRequireVerifiedAddressHook
    | SelfServiceWebHook
  )[]
}
export interface SelfServiceSessionRevokerHook {
  hook: "revoke_active_sessions"
}
export interface SelfServiceRequireVerifiedAddressHook {
  hook: "require_verified_address"
}
export interface SelfServiceAfterOIDCLoginMethod {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  hooks?: (
    | SelfServiceSessionRevokerHook
    | SelfServiceWebHook
    | SelfServiceRequireVerifiedAddressHook
  )[]
}
export interface EmailAndPhoneVerificationAndAccountActivationConfiguration {
  enabled?: EnableEmailPhoneVerification
  ui_url?: VerifyUIURL
  after?: SelfServiceAfterVerification
  lifespan?: SelfServiceVerificationRequestLifespan
  before?: SelfServiceBeforeVerification
  use?: VerificationStrategy
  notify_unknown_recipients?: NotifyUnknownRecipients
}
export interface SelfServiceAfterVerification {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  hooks?: SelfServiceHooks
}
export interface SelfServiceBeforeVerification {
  hooks?: SelfServiceHooks
}
export interface AccountRecoveryConfiguration {
  enabled?: EnableAccountRecovery
  ui_url?: RecoveryUIURL
  after?: SelfServiceAfterRecovery
  lifespan?: SelfServiceRecoveryRequestLifespan
  before?: SelfServiceBeforeRecovery
  use?: RecoveryStrategy
  notify_unknown_recipients?: NotifyUnknownRecipients1
}
export interface SelfServiceAfterRecovery {
  default_browser_return_url?: RedirectBrowsersToSetURLPerDefault
  hooks?: SelfServiceAfterRecoveryHooks
}
export interface SelfServiceBeforeRecovery {
  hooks?: SelfServiceHooks
}
/**
 * Additional configuration for the link strategy.
 */
export interface LinkConfiguration {
  base_url?: OverrideTheBaseURLWhichShouldBeUsedAsTheBaseForRecoveryAndVerificationLinks
  lifespan?: HowLongALinkIsValidFor
  [k: string]: unknown | undefined
}
/**
 * Additional configuration for the code strategy.
 */
export interface CodeConfiguration {
  lifespan?: HowLongACodeIsValidFor
  [k: string]: unknown | undefined
}
/**
 * Define how passwords are validated.
 */
export interface PasswordConfiguration {
  haveibeenpwned_host?: CustomHaveibeenpwnedHost
  haveibeenpwned_enabled?: EnableTheHaveIBeenPwnedAPI
  max_breaches?: AllowPasswordBreaches
  ignore_network_errors?: IgnoreLookupNetworkErrors
  min_password_length?: MinimumPasswordLength
  identifier_similarity_check_enabled?: EnablePasswordIdentifierSimilarityCheck
}
export interface TOTPConfiguration {
  issuer?: TOTPIssuer
}
export interface WebAuthnConfiguration {
  passwordless?: UseForPasswordlessFlows
  rp?: RelyingPartyRPConfig
}
export interface RelyingPartyRPConfig {
  display_name: RelyingPartyDisplayName
  id: RelyingPartyIdentifier
  origin?: RelyingPartyOrigin
  icon?: RelyingPartyIcon
  [k: string]: unknown | undefined
}
export interface SpecifyOpenIDConnectAndOAuth2Configuration {
  enabled?: EnablesOpenIDConnectMethod
  config?: {
    base_redirect_uri?: BaseURLForOAuth2RedirectURIs
    providers?: OpenIDConnectAndOAuth2Providers
  }
}
/**
 * The OpenID Connect claims and optionally their properties which should be included in the id_token or returned from the UserInfo Endpoint.
 */
export interface OpenIDConnectClaims {
  /**
   * This interface was referenced by `OpenIDConnectClaims`'s JSON-Schema definition
   * via the `patternProperty` "^userinfo$|^id_token$".
   */
  [k: string]: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: null | {
      /**
       * Indicates whether the Claim being requested is an Essential Claim.
       */
      essential?: boolean
      /**
       * Requests that the Claim be returned with a particular value.
       */
      value?: {
        [k: string]: unknown | undefined
      }
      /**
       * Requests that the Claim be returned with one of a set of values, with the values appearing in order of preference.
       */
      values?: {
        [k: string]: unknown | undefined
      }[]
    }
  }
}
/**
 * Miscellaneous settings used in database related tasks (cleanup, etc.)
 */
export interface DatabaseRelatedConfiguration {
  cleanup?: DatabaseCleanupSettings
}
/**
 * Settings that controls how the database cleanup process is configured (delays, batch size, etc.)
 */
export interface DatabaseCleanupSettings {
  batch_size?: NumberOfRecordsToCleanInOneIteration
  sleep?: DelaysBetweenVariousDatabaseCleanupPhases
  older_than?: RemoveRecordsOlderThan
  [k: string]: unknown | undefined
}
/**
 * Configures delays between each step of the cleanup process. It is useful to tune the process so it will be efficient and performant.
 */
export interface DelaysBetweenVariousDatabaseCleanupPhases {
  tables?: DelayBetweenEachTableCleanups
  [k: string]: unknown | undefined
}
/**
 * The courier is responsible for sending and delivering messages over email, sms, and other means.
 */
export interface CourierConfiguration {
  templates?: {
    recovery?: CourierTemplates
    recovery_code?: CourierTemplates
    verification?: CourierTemplates
    verification_code?: CourierTemplates
  }
  template_override_path?: OverrideMessageTemplates
  /**
   * Defines the maximum number of times the sending of a message is retried after it failed before it is marked as abandoned
   */
  message_retries?: number
  smtp: SMTPConfiguration
  sms?: SMSSenderConfiguration
}
export interface CourierTemplates {
  invalid?: {
    email: EmailCourierTemplate
  }
  valid?: {
    email: EmailCourierTemplate
  }
}
export interface EmailCourierTemplate {
  body?: {
    /**
     * The fallback template for email clients that do not support html.
     */
    plaintext?: string
    /**
     * The default template used for sending out emails. The template can contain HTML
     */
    html?: string
  }
  subject?: string
}
/**
 * Configures outgoing emails using the SMTP protocol.
 */
export interface SMTPConfiguration {
  connection_uri: SMTPConnectionString
  client_cert_path?: SMTPClientCertificatePath
  client_key_path?: SMTPClientPrivateKeyPath
  from_address?: SMTPSenderAddress
  from_name?: SMTPSenderName
  headers?: SMTPHeaders
  local_name?: SMTPHELOEHLOName
}
/**
 * These headers will be passed in the SMTP conversation -- e.g. when using the AWS SES SMTP interface for cross-account sending.
 */
export interface SMTPHeaders {
  [k: string]: string | undefined
}
/**
 * Configures outgoing sms messages using HTTP protocol with generic SMS provider
 */
export interface SMSSenderConfiguration {
  /**
   * Determines if SMS functionality is enabled
   */
  enabled?: boolean
  from?: SMSSenderAddress
  request_config?: {
    url: HTTPAddressOfAPIEndpoint
    /**
     * The HTTP method to use (GET, POST, etc).
     */
    method: string
    /**
     * The HTTP headers that must be applied to request
     */
    headers?: {
      [k: string]: string | undefined
    }
    /**
     * URI pointing to the jsonnet template used for payload generation. Only used for those HTTP methods, which support HTTP body payloads
     */
    body?: string
    auth?: AuthMechanisms
    additionalProperties?: false
  }
}
export interface WebHookAuthApiKeyProperties {
  type: "api_key"
  config: {
    /**
     * The name of the api key
     */
    name: string
    /**
     * The value of the api key
     */
    value: string
    /**
     * How the api key should be transferred
     */
    in: "header" | "cookie"
  }
}
export interface WebHookAuthBasicAuthProperties {
  type: "basic_auth"
  config: {
    /**
     * user name for basic auth
     */
    user: string
    /**
     * password for basic auth
     */
    password: string
  }
}
export interface OAuth2ProviderConfiguration {
  url?: OAuth20ProviderURL
  headers?: HTTPRequestHeaders
  override_return_to?: boolean
}
/**
 * These headers will be passed in HTTP request to the OAuth2 Provider.
 */
export interface HTTPRequestHeaders {
  [k: string]: string | undefined
}
/**
 * Sets the permissions of the unix socket
 */
export interface Socket {
  /**
   * Owner of unix socket. If empty, the owner will be the user running Kratos.
   */
  owner?: string
  /**
   * Group of unix socket. If empty, the group will be the primary group of the user running Kratos.
   */
  group?: string
  /**
   * Mode of unix socket in numeric form
   */
  mode?: number
}
/**
 * Configure HTTP over TLS (HTTPS). All options can also be set using environment variables by replacing dots (`.`) with underscores (`_`) and uppercasing the key. For example, `some.prefix.tls.key.path` becomes `export SOME_PREFIX_TLS_KEY_PATH`. If all keys are left undefined, TLS will be disabled.
 */
export interface HTTPS {
  key?: PrivateKeyPEM
  cert?: TLSCertificatePEM
}
export interface TlsxSource {
  path?: PathToPEMEncodedFle
  base64?: Base64EncodedInline
}
/**
 * Configure distributed tracing using OpenTelemetry
 */
export interface OryTracingConfig {
  /**
   * Set this to the tracing backend you wish to use. Supports Jaeger, Zipkin, and OTEL.
   */
  provider?: "jaeger" | "otel" | "zipkin"
  /**
   * Specifies the service name to use on the tracer.
   */
  service_name?: string
  providers?: {
    /**
     * Configures the jaeger tracing backend.
     */
    jaeger?: {
      /**
       * The address of the jaeger-agent where spans should be sent to.
       */
      local_agent_address?: (
        | IPv6AddressAndPort
        | IPv4AddressAndPort
        | HostnameAndPort
      ) &
        string
      sampling?: {
        /**
         * The address of jaeger-agent's HTTP sampling server
         */
        server_url?: string
        /**
         * Trace Id ratio sample
         */
        trace_id_ratio?: number
      }
    }
    /**
     * Configures the zipkin tracing backend.
     */
    zipkin?: {
      /**
       * The address of the Zipkin server where spans should be sent to.
       */
      server_url?: string
      sampling?: {
        /**
         * Sampling ratio for spans.
         */
        sampling_ratio?: number
      }
    }
    /**
     * Configures the OTLP tracing backend.
     */
    otlp?: {
      /**
       * The endpoint of the OTLP exporter (HTTP) where spans should be sent to.
       */
      server_url?: (
        | IPv6AddressAndPort1
        | IPv4AddressAndPort1
        | HostnameAndPort1
      ) &
        string
      /**
       * Will use HTTP if set to true; defaults to HTTPS.
       */
      insecure?: boolean
      sampling?: {
        /**
         * Sampling ratio for spans.
         */
        sampling_ratio?: number
      }
    }
  }
}
export interface IPv6AddressAndPort {
  [k: string]: unknown | undefined
}
export interface IPv4AddressAndPort {
  [k: string]: unknown | undefined
}
export interface HostnameAndPort {
  [k: string]: unknown | undefined
}
export interface IPv6AddressAndPort1 {
  [k: string]: unknown | undefined
}
export interface IPv4AddressAndPort1 {
  [k: string]: unknown | undefined
}
export interface HostnameAndPort1 {
  [k: string]: unknown | undefined
}
/**
 * Configure logging using the following options. Logging will always be sent to stdout and stderr.
 */
export interface Log {
  /**
   * Debug enables stack traces on errors. Can also be set using environment variable LOG_LEVEL.
   */
  level?: "trace" | "debug" | "info" | "warning" | "error" | "fatal" | "panic"
  leak_sensitive_values?: LeakSensitiveLogValues
  redaction_text?: SensitiveLogValueRedactionText
  /**
   * The log format can either be text or JSON.
   */
  format?: "json" | "text"
}
export interface HashingAlgorithmConfiguration {
  algorithm?: PasswordHashingAlgorithm
  argon2?: ConfigurationForTheArgon2IdHasher
  bcrypt?: ConfigurationForTheBcryptHasherMinimumIs4WhenDevFlagIsUsedAnd12Otherwise
}
export interface ConfigurationForTheArgon2IdHasher {
  memory?: string
  iterations?: number
  /**
   * Number of parallel workers, defaults to 2*runtime.NumCPU().
   */
  parallelism?: number
  salt_length?: number
  key_length?: number
  /**
   * The time a hashing operation (~login latency) should take.
   */
  expected_duration?: string
  /**
   * The standard deviation expected for hashing operations. If this value is exceeded you will be warned in the logs to adjust the parameters.
   */
  expected_deviation?: string
  /**
   * The memory dedicated for Kratos. As password hashing is very resource intense, Kratos will monitor the memory consumption and warn about high values.
   */
  dedicated_memory?: string
}
export interface ConfigurationForTheBcryptHasherMinimumIs4WhenDevFlagIsUsedAnd12Otherwise {
  cost: number
}
export interface CipherAlgorithmConfiguration {
  algorithm?: CipheringAlgorithm
  [k: string]: unknown | undefined
}
/**
 * Configure the HTTP Cookies. Applies to both CSRF and session cookies.
 */
export interface HTTPCookieConfiguration {
  domain?: HTTPCookieDomain
  path?: HTTPCookiePath
  same_site?: HTTPCookieSameSiteConfiguration
}
/**
 * Control how the `/sessions/whoami` endpoint is behaving.
 */
export interface WhoAmIToSessionSettings {
  required_aal?: RequiredAuthenticatorAssuranceLevel
}
/**
 * Configure how outgoing network calls behave.
 */
export interface GlobalOutgoingNetworkSettings {
  http?: GlobalHTTPClientConfiguration
  [k: string]: unknown | undefined
}
/**
 * Configure how outgoing HTTP calls behave.
 */
export interface GlobalHTTPClientConfiguration {
  disallow_private_ip_ranges?: DisallowPrivateIPRanges
  private_ip_exception_urls?: AddExemptURLsToPrivateIPRanges
  [k: string]: unknown | undefined
}
export interface FeatureFlags {
  cacheable_sessions?: EnableOrySessionsCaching
}
