import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(4000),
  CLIENT_URL: z.string().default('http://localhost:5173'),
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
  EMAIL_FROM: z.string().default('noreply@growright.app'),

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
    // Use stdout so Railway deploy logs capture this
    console.log('=== FATAL: Invalid environment variables ===');
    console.log(JSON.stringify(errors, null, 2));
    console.log('=== Missing or invalid vars listed above ===');
    process.exit(1);
  }

  return result.data;
}

export const config = loadConfig();
export type Config = z.infer<typeof envSchema>;
