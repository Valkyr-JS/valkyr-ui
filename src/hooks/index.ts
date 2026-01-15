import { ApolloCache, FetchResult } from "@apollo/client";
import { useEffect } from "react";

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/core/StashService.ts#L2627 */
function updateConfiguration(cache: ApolloCache<unknown>, result: FetchResult) {
  if (!result.data) return;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/core/StashService.ts#L2703 */
export const useConfigurePlugin = () =>
  PluginApi.GQL.useConfigurePluginMutation({
    update: updateConfiguration,
  });

/**
 * `useStopWheelScroll` is a hook to provide a workaround for a bug in
 * React/Chrome. If a number field is focused and the mouse pointer is over the
 * field, then scrolling the mouse wheel will change the field value _and_
 * scroll the window. This hook prevents the propagation that causes the window
 * to scroll.
 *
 * https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/utils/form.tsx#L50
 */
export function useStopWheelScroll(ref: React.RefObject<HTMLElement>) {
  // removed the dependency array because the underlying ref value may change
  useEffect(() => {
    const { current } = ref;

    function stopWheelScroll(e: WheelEvent) {
      if (current) e.stopPropagation();
    }

    if (current) current.addEventListener("wheel", stopWheelScroll);

    return () => {
      if (current) {
        current.removeEventListener("wheel", stopWheelScroll);
      }
    };
  });
}
