// src/components/ui/button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(
  (
    {
      children,
      variant = 'default',
      size = 'default',
      className = '',
      isLoading = false,
      disabled = false,
      icon: Icon,
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    };

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    };

    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center 
          rounded-md text-sm font-medium 
          transition-colors 
          focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-ring focus-visible:ring-offset-2 
          disabled:opacity-50 disabled:pointer-events-none
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {Icon && iconPosition === 'left' && (
              <Icon className="mr-2 h-4 w-4" />
            )}
            {children}
            {Icon && iconPosition === 'right' && (
              <Icon className="ml-2 h-4 w-4" />
            )}
          </>
        )}
      </button>
    );
  }
);

Button.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'destructive',
    'outline',
    'secondary',
    'ghost',
    'link',
  ]),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
};

Button.displayName = 'Button';

export { Button };