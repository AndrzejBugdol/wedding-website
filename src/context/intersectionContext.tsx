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
  refHash: string | undefined;
  setRefHash: (newRef: RefObject<HTMLBodyElement>) => void;
  navigate: (hash: string) => void;
};

export const IntersectionContext = createContext<ContextType>({
  refHash: undefined,
  setRefHash: () => undefined,
  navigate: () => undefined,
});

type IntersectionContextProviderProps = {
  children?: ReactNode;
};

export const IntersectionContextProvider = ({
  children,
}: IntersectionContextProviderProps) => {
  const [refHash, setRefHash] = useState<string | undefined>(undefined);

  const handleRefHashUpdate = useCallback(
    (ref: RefObject<HTMLBodyElement>) => {
      if (isNil(ref?.current)) return setRefHash(undefined);

      setRefHash(`#${ref?.current.id}`);
    },
    [setRefHash]
  );

  const handleNavigate = (href: string) => {
    setRefHash(href);
    const sectionToShow = document.querySelector(href);
    if (sectionToShow) {
      sectionToShow.scrollIntoView();
    }
  };

  useEffect(() => {
    if (window.location.hash !== refHash) {
      history.replaceState({}, '', refHash);
    }
  }, [handleRefHashUpdate, refHash]);

  const context = useMemo<ContextType>(
    () => ({
      refHash: refHash,
      setRefHash: handleRefHashUpdate,
      navigate: handleNavigate,
    }),
    [handleRefHashUpdate, refHash]
  );

  return (
    <IntersectionContext.Provider value={context}>
      {children}
    </IntersectionContext.Provider>
  );
};

export const useIntersection = () => {
  const context = useContext(IntersectionContext);
  if (context === undefined) {
    throw new Error(
      'useIntersection must be used within a IntersectionContextProvider'
    );
  }
  return context;
};
