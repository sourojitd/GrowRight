import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(4000),
  CLIENT_URL: z.string().default('http://localhost:5173'),
  SERVER_URL: z.string().default('http://localhost:4000'),
  API_VERSION: z.string().default('v1'),

  DATABASE_URL: z.string(),
  REDIS_URL: z.string().default('redis://localhost:6379'),

  JWT_ACCESS_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  JWT_ACCESS_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
  BCRYPT_ROUNDS: z.coerce.number().default(12),

  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900_000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100),

  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  EMAIL_FROM: z.string().default('noreply@growright.sourojit.com'),

  RESEND_API_KEY: z.string().optional(),
  FROM_EMAIL: z.string().default('GrowRight <noreply@growright.sourojit.com>'),

  AI_PROVIDER: z.enum(['none', 'openai', 'anthropic']).default('none'),
  AI_API_KEY: z.string().optional(),
  AI_MODEL: z.string().optional(),

  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('debug'),
  LOG_FORMAT: z.enum(['json', 'pretty']).default('pretty'),

  ENABLE_AI_ROADMAP: z.coerce.boolean().default(false),
  ENABLE_SUBSCRIPTION_BILLING: z.coerce.boolean().default(false),
});

function loadConfig() {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    const msg = [
      '=== FATAL: Invalid environment variables ===',
      JSON.stringify(errors, null, 2),
      '=== Missing or invalid vars listed above ===',
    ].join('\n');
    // Write synchronously to ensure Railway captures the output before exit
    process.stdout.write(msg + '\n', () => process.exit(1));
    // Fallback if callback never fires
    setTimeout(() => process.exit(1), 1000);
    // Block the event loop so we don't continue loading
    throw new Error('Invalid environment configuration');
  }

  return result.data;
}

export const config = loadConfig();
export type Config = z.infer<typeof envSchema>;
