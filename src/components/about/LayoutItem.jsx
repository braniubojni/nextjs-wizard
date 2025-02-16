import clsx from 'clsx';

const LayoutItem = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};
export default LayoutItem;
