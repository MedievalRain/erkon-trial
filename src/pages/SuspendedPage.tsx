import { PropsWithChildren, Suspense } from "react";

function SuspendedPage({ children }: PropsWithChildren) {
  return <Suspense fallback={null}>{children}</Suspense>; // TODO add fallback
}

export { SuspendedPage };
