import { ReactNode } from 'react';

interface CollapsingViewProps {
  header?: ReactNode;
  body?: ReactNode;
  isCollapsed?: boolean;
}

type CreateStylesProps = {
  isCollapsed;
};

export { CollapsingViewProps, CreateStylesProps };
