import AwaitedSurreal from '@theopensource-company/awaited-surrealdb';

export const SurrealEndpoint = `${
    process.env.NEXT_PUBLIC_SURREAL_ENDPOINT ?? 'http://localhost:8000'
}/rpc`;
export const SurrealNamespace =
    process.env.NEXT_PUBLIC_SURREAL_NAMESPACE ?? 'healxyz-deployment_local';
export const SurrealDatabase =
    process.env.NEXT_PUBLIC_SURREAL_DATABASE ?? 'healxyz-social';

export const SurrealInstance = new AwaitedSurreal({
    endpoint: SurrealEndpoint,
    namespace: SurrealNamespace,
    database: SurrealDatabase,
    token: async () => localStorage.getItem('kusrsess'),
});
