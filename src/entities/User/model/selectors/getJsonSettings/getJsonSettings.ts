import { StateSchema } from '@/app/providers/StoreProvider';

export const getJsonSettings = (state: StateSchema) => state.user.authData?.jsonSettings || {};
