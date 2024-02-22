import "@axa-fr/design-system-slash-css/dist/Accordion/Accordion.scss";
import React, { useId } from "react";
import { getComponentClassName } from "../utilities";
import { CollapseCard, CollapseProps } from "./CollapseCard";

const defaultClassName = "af-accordion";

const defaultProps = {
  onlyOne: false,
  className: defaultClassName,
};

export type EnhancedProps = Partial<typeof defaultProps> & {
  onlyOne?: boolean;
  className?: string;
  classModifier?: string;
  children:
    | React.ReactElement<CollapseProps>[]
    | React.ReactElement<CollapseProps>;
};

const Accordion = ({
  className,
  classModifier,
  children,
  onlyOne = false,
}: EnhancedProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  const id = useId();
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <div className={componentClassName}>
      {childrenArray.map((child) => (
        <CollapseCard
          {...child.props}
          name={onlyOne ? id : undefined}
          key={child.props.id}
        >
          {child.props.children}
        </CollapseCard>
      ))}
    </div>
  );
};

export { Accordion };
