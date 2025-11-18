declare module 'pg' {
  export interface QueryResult<T = Record<string, unknown>> {
    rows: T[];
  }

  export interface PoolClient {
    query<T = Record<string, unknown>>(text: string, params?: unknown[]): Promise<QueryResult<T>>;
    release(): void;
  }

  export class Pool {
    constructor(config?: {
      connectionString?: string;
      max?: number;
      idleTimeoutMillis?: number;
      connectionTimeoutMillis?: number;
    });

    connect(): Promise<PoolClient>;
    end(): Promise<void>;
  }
}
