import { ApolloCache, FetchResult } from "@apollo/client";

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/core/StashService.ts#L2627 */
function updateConfiguration(cache: ApolloCache<unknown>, result: FetchResult) {
  if (!result.data) return;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/core/StashService.ts#L2703 */
export const useConfigurePlugin = () =>
  PluginApi.GQL.useConfigurePluginMutation({
    update: updateConfiguration,
  });
