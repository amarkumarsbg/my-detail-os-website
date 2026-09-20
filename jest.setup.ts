import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

jest.mock("framer-motion", () => {
  const React = require("react");
  const passthrough = React.forwardRef(
    (
      { children, ...props }: { children?: React.ReactNode; [key: string]: unknown },
      ref: React.Ref<HTMLElement>
    ) => {
      const {
        initial,
        animate,
        exit,
        variants,
        whileInView,
        whileHover,
        whileTap,
        viewport,
        transition,
        layout,
        ...rest
      } = props;
      return React.createElement("div", { ...rest, ref }, children);
    }
  );
  passthrough.displayName = "MotionPassthrough";

  const motion = new Proxy(
    {},
    {
      get: () => passthrough,
    }
  );

  return {
    motion,
    AnimatePresence: ({ children }: { children?: React.ReactNode }) => children ?? null,
    useInView: () => true,
  };
});
