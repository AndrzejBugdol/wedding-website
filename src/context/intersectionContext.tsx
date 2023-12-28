import { isNil } from 'lodash';
import {
  useContext,
  createContext,
  ReactNode,
  useMemo,
  useState,
  useCallback,
  RefObject,
  useEffect,
} from 'react';

type ContextType = {
  containerRef: RefObject<HTMLBodyElement> | null;
  refHash: string | undefined;
  setContainerRef: (newRef: RefObject<HTMLBodyElement>) => void;
};

export const IntersectionContext = createContext<ContextType>({
  containerRef: null,
  refHash: undefined,
  setContainerRef: () => undefined,
});

type IntersectionContextProviderProps = {
  children?: ReactNode;
};

export function IntersectionContextProvider({
  children,
}: IntersectionContextProviderProps) {
  const [ref, setRef] = useState<RefObject<HTMLBodyElement> | null>(null);
  const [refHash, setRefHash] = useState<string | undefined>(undefined);

  const handleRefHashUpdate = useCallback(() => {
    if (isNil(ref?.current)) return setRefHash(undefined);

    setRefHash(`#${ref?.current.id}`);
  }, [ref, setRefHash]);

  useEffect(() => {
    handleRefHashUpdate();
    if (window.location.hash !== refHash) {
      history.pushState({}, window.toString(), refHash);
    }
  }, [handleRefHashUpdate, refHash]);

  const context = useMemo<ContextType>(
    () => ({
      containerRef: ref,
      setContainerRef: setRef,
      refHash: refHash,
    }),
    [ref, refHash]
  );

  return (
    <IntersectionContext.Provider value={context}>
      {children}
    </IntersectionContext.Provider>
  );
}

export function useIntersection() {
  const context = useContext(IntersectionContext);
  if (context === undefined) {
    throw new Error(
      'useIntersection must be used within a IntersectionContextProvider'
    );
  }
  return context;
}
