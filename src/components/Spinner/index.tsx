import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";
import * as React from "react";

const spinnerVariants = "w-16 h-16 rounded-full animate-spin";

interface LoadingSpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
  className?: string;
}

const LoadingSpinner = React.forwardRef<SVGSVGElement, LoadingSpinnerProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <LoaderIcon ref={ref} className={cn(spinnerVariants, className)} {...rest} />
    </div>
  );
});

LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };

