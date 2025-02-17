export const ITEM = {
  hidden: { scale: 0 },
  show: { scale: 1 },
  get showProp() {
    return 'show';
  },
  get hiddenProp() {
    return 'hidden';
  },
};

export const CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  get showProp() {
    return 'show';
  },
  get hiddenProp() {
    return 'hidden';
  },
};
