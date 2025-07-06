"use client";

import * as React from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLucideIcon, getIcon } from "@/lib/icons";

// Simple Tooltip Component
function Tooltip({ children, content, className }: { children: React.ReactNode; content: string; className?: string }) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-xs text-primary-foreground bg-primary rounded shadow-lg whitespace-nowrap",
            "animate-in fade-in-0 zoom-in-95 duration-200",
            "bottom-full left-1/2 transform -translate-x-1/2 mb-1",
            className
          )}
        >
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
        </div>
      )}
    </div>
  );
}

export function NavigationMenuRoot({
  children,
  className,
}: React.ComponentPropsWithoutRef<"nav">) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn("hidden md:flex items-center gap-1 bg-background", className)}>
        {children}
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b bg-background">
        <div className="text-lg font-semibold text-foreground">Logo</div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Open mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background">
          <div className="flex flex-col h-full w-full">
            {/* Close button header */}
            <div className="flex justify-end p-4 border-b bg-background">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu items - full height with scrollbar */}
            <div className="flex-1 overflow-y-auto bg-background">
              <div className="flex flex-col px-4 py-4 space-y-2">
                {React.Children.map(children, (child) =>
                  React.isValidElement(child)
                    ? React.cloneElement(child, {
                        isMobile: true,
                        closeMobileMenu: () => setIsMobileMenuOpen(false),
                      } as any)
                    : child
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function NavigationMenuItem({
  children,
  className,
  isMobile,
  closeMobileMenu,
}: React.ComponentPropsWithoutRef<"div"> & {
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => setIsHovered(false), 150);
  };

  const handleMobileToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (isMobile) {
    return (
      <div className={cn("w-full", className)}>
        {React.Children.map(children, (child) => {
          const propagate = (node: React.ReactNode): React.ReactNode => {
            if (!React.isValidElement(node)) return node;

            const newProps: any = {};
            if (typeof node.type !== "string") {
              newProps.isMobile = true;
              newProps.onMobileToggle = handleMobileToggle;
              newProps.closeMobileMenu = closeMobileMenu;
            }

            const childrenProp = (node.props as any)?.children;
            const shouldClone = Object.keys(newProps).length > 0 || childrenProp !== (node.props as any)?.children;
            const nextChildren = childrenProp ? React.Children.map(childrenProp, propagate) : childrenProp;
            
            if (shouldClone && typeof node.type === "string") {
              const props = node.props as any;
              const { isMobile, onMobileToggle, closeMobileMenu, ...domProps } = props;
              return React.cloneElement(node, domProps, nextChildren);
            }
            
            return shouldClone ? React.cloneElement(node, newProps, nextChildren) : node;
          };

          return propagate(child);
        })}
      </div>
    );
  }

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child) => {
        const propagate = (node: React.ReactNode): React.ReactNode => {
          if (!React.isValidElement(node)) return node;

          const newProps: any = {};
          const allowedTypes = new Set([NavigationMenuTrigger, NavigationMenuContent]);
          if (allowedTypes.has(node.type as any)) {
            newProps.isHovered = isHovered;
          }

          const childrenProp = (node.props as any)?.children;
          const shouldClone = Object.keys(newProps).length > 0 || childrenProp !== (node.props as any)?.children;
          const nextChildren = childrenProp ? React.Children.map(childrenProp, propagate) : childrenProp;
          
          if (shouldClone && typeof node.type === "string") {
            const props = node.props as any;
            const { isMobile, onMobileToggle, closeMobileMenu, ...domProps } = props;
            return React.cloneElement(node, domProps, nextChildren);
          }
          
          return shouldClone ? React.cloneElement(node, newProps, nextChildren) : node;
        }; 

        return propagate(child);
      })}
    </div>
  );
}

export function NavigationMenuTrigger({
  children,
  onClick,
  open,
  isHovered,
  className,
  hasDropdown = true,
  isMobile,
  onMobileToggle,
  closeMobileMenu,
  isActive,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  open?: boolean;
  isHovered?: boolean;
  className?: string;
  hasDropdown?: boolean;
  isMobile?: boolean;
  onMobileToggle?: () => void;
  closeMobileMenu?: () => void;
  isActive?: boolean;
}) {
  const isOpen = open || isHovered;

  const handleClick = () => {
    if (isMobile && hasDropdown) {
      onMobileToggle?.();
    } else {
      onClick?.();
      if (isMobile && !hasDropdown) {
        closeMobileMenu?.();
      }
    }
  };

  if (isMobile) {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "flex items-center justify-between w-full px-3 py-3 text-base font-medium transition-colors rounded-md",
          isActive 
            ? "text-primary bg-primary/10 hover:bg-primary/20 focus:bg-primary/20" 
            : "text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent focus:text-accent-foreground",
          isOpen && !isActive && "bg-accent text-accent-foreground",
          className
        )}
      >
        <span>{children}</span>
        {hasDropdown && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200 text-muted-foreground",
              isOpen && "rotate-180"
            )}
          />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
        isActive 
          ? "text-primary bg-primary/10 hover:bg-primary/20 focus:bg-primary/20" 
          : "text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent focus:text-accent-foreground",
        isOpen && hasDropdown && !isActive && "bg-accent text-accent-foreground",
        className
      )}
    >
      {children}
      {hasDropdown && (
        <ChevronDown
          className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200 text-muted-foreground",
            isOpen && "rotate-180"
          )}
        />
      )}
    </button>
  );
}

export function NavigationMenuContent({
  children,
  open,
  isHovered,
  className,
  isMobile,
}: {
  children: React.ReactNode;
  open?: boolean;
  isHovered?: boolean;
  className?: string;
  isMobile?: boolean;
}) {
  const isVisible = open || isHovered;
  if (!isVisible) return null;

  const childrenArray = React.Children.toArray(children);
  const shouldUseHorizontalLayout = !isMobile && childrenArray.length > 8;

  if (isMobile) {
    return (
      <div className={cn("w-full mt-2 space-y-1 bg-muted/30 rounded-md p-2", className)}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          
          if (typeof child.type === "string") {
            return child;
          }
          
          return React.cloneElement(child, { isMobile: true } as any);
        })}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute left-0 top-full mt-2 rounded-md border bg-popover shadow-lg z-50",
        "animate-in fade-in zoom-in-95 duration-200",
        shouldUseHorizontalLayout ? "w-auto min-w-[600px]" : "w-48",
        className
      )}
    >
      <span className="absolute -top-1.5 left-8 w-3 h-3 bg-popover border border-border rotate-45" />

      <div className={cn(
        "py-1",
        shouldUseHorizontalLayout ? "grid grid-cols-3 gap-1 p-2 divide-x divide-border" : ""
      )}>
        {shouldUseHorizontalLayout ? (
          <>
            <div className="space-y-1 pr-2">
              {childrenArray.slice(0, Math.ceil(childrenArray.length / 3))}
            </div>
            <div className="space-y-1 px-2">
              {childrenArray.slice(Math.ceil(childrenArray.length / 3), Math.ceil(childrenArray.length / 3) * 2)}
            </div>
            <div className="space-y-1 pl-2">
              {childrenArray.slice(Math.ceil(childrenArray.length / 3) * 2)}
            </div>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export function NavigationMenuLink({
  href,
  children,
  className,
  onClick,
  isMobile,
  closeMobileMenu,
  icon,
  isActive,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
  closeMobileMenu?: () => void;
  icon?: string;
  isActive?: boolean;
}) {
  const isExternal = href ? /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(href) : false;
  const Component: any = href
    ? isExternal
      ? "a"
      : Link
    : "button";
  const IconComponent = icon ? (() => {
    try {
      return getLucideIcon(icon) as LucideIcon | undefined;
    } catch (error) {
      console.warn(`Failed to load icon "${icon}":`, error);
      return undefined;
    }
  })() : undefined;
  

  const handleClick = () => {
    if (!href) {
      return;
    }
    onClick?.();
    if (isMobile) {
      closeMobileMenu?.();
    }
  };

  const content = (
    <Component
      {...(href && { href })}
      onClick={handleClick}
      className={cn(
        "block w-full text-left px-3 py-2 text-sm transition-colors rounded-sm",
        href 
          ? isActive 
            ? "text-primary bg-primary/10 hover:bg-primary/20 focus:bg-primary/20" 
            : "text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          : "cursor-not-allowed opacity-60 text-muted-foreground",
        className
      )}
      data-active={isActive}
    >
      <div className="flex items-center gap-3">
        {IconComponent && (<IconComponent className="h-4 w-4" />)}
        {children}
      </div>
    </Component>
  );

  if (isMobile) {
    return (
      <Component
        {...(href && { href })}
        onClick={handleClick}
        className={cn(
          "block w-full text-left px-4 py-3 text-sm transition-colors rounded-md",
          href 
            ? isActive 
              ? "text-primary bg-primary/10 hover:bg-primary/20 focus:bg-primary/20" 
              : "text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            : "cursor-not-allowed opacity-60 text-muted-foreground",
          className
        )}
        data-active={isActive}
      >
        <div className="flex items-center gap-3">
          {IconComponent && <IconComponent className="h-4 w-4" />}
          {children}
        </div>
      </Component>
    );
  }

  if (!href) {
    return (
      <Tooltip content="Coming Soon">
        {content}
      </Tooltip>
    );
  }

  return content;
}

export function NavigationSubMenu({
  trigger,
  children,
  isMobile,
  closeMobileMenu,
  icon,
  href,
  isActive,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isMobile?: boolean;
  closeMobileMenu?: () => void;
  icon?: string;
  href?: string;
  isActive?: boolean;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] = React.useState<"left" | "right">("right");
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const submenuRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);

    if (submenuRef.current) {
      const rect = submenuRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const spaceRight = screenWidth - rect.right;
      const spaceLeft = rect.left;
      if (spaceRight < 200 && spaceLeft > 200) {
        setPosition("left");
      } else {
        setPosition("right");
      }
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => setIsHovered(false), 150);
  };

  const handleMobileToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const isExternal = href ? /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(href) : false;
  const LinkComponent: any = href ? (isExternal ? "a" : Link) : "span";

  if (isMobile) {
    const IconComponent = icon ? (() => {
      try {
        return getIcon(icon) as LucideIcon | undefined;
      } catch (error) {
        console.warn(`Failed to load icon "${icon}":`, error);
        return undefined;
      }
    })() : undefined;
    
    return (
      <div className="w-full">
        <div
          onClick={handleMobileToggle}
          className={cn(
            "flex w-full items-center justify-between px-4 py-3 text-sm transition-colors rounded-md cursor-pointer",
            isActive 
              ? "text-primary bg-primary/10 hover:bg-primary/20 focus:bg-primary/20" 
              : "text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent focus:text-accent-foreground",
            isOpen && !isActive && "bg-accent text-accent-foreground"
          )}
        >
          <div className="flex items-center gap-3">
            {IconComponent && <IconComponent className="h-4 w-4" />}
            <LinkComponent {...(href && { href })} className={cn(
              "inline-flex items-center gap-1",
              isActive ? "text-primary" : "text-foreground"
            )}>
              <span>{trigger}</span>
            </LinkComponent>
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200 text-muted-foreground",
              isOpen && "rotate-180"
            )}
          />
        </div>

        {isOpen && (
          <div className="flex flex-col w-full pl-4 mt-1 space-y-1 border-l border-border max-h-60 overflow-y-auto">
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return child;
              
              if (typeof child.type === "string") {
                return child;
              }
              
              return React.cloneElement(child, {
                isMobile: true,
                closeMobileMenu,
              } as any);
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={submenuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between px-3 py-2 text-sm transition-colors rounded-sm cursor-pointer",
          isActive 
            ? "text-primary bg-primary/10 hover:bg-primary/20 focus:bg-primary/20" 
            : "text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          isHovered && !isActive && "bg-accent text-accent-foreground"
        )}
      >
        <div className="flex items-center gap-3">
          {icon && (() => {
            try {
              const IconComponentLocal = getIcon(icon) as LucideIcon;
              return <IconComponentLocal className="h-4 w-4" />;
            } catch (error) {
              console.warn(`Failed to load icon "${icon}":`, error);
              return null;
            }
          })()}
          <LinkComponent {...(href && { href })} className={cn(
            "inline-flex items-center gap-1",
            isActive ? "text-primary" : "text-foreground"
          )}>
            {trigger}
          </LinkComponent>
        </div>
        <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
      </div>

      {isHovered && (
        <div
          className={cn(
            "absolute top-0 rounded-md border bg-popover shadow-lg z-50 animate-in fade-in zoom-in-95 duration-200",
            position === "right" ? "left-full ml-2" : "right-full mr-2",
            React.Children.count(children) > 8 ? "w-auto min-w-[600px]" : "w-48"
          )}
        >
          <span
            className={cn(
              "absolute top-4 w-3 h-3 bg-popover border border-border shadow-sm rotate-45",
              position === "right" ? "-left-1.5" : "-right-1.5"
            )}
          />

          <div className={cn(
            "py-1",
            React.Children.count(children) > 8 ? "grid grid-cols-3 gap-1 p-2 divide-x divide-border" : ""
          )}>
            {React.Children.count(children) > 8 ? (
              <>
                <div className="space-y-1 pr-2">
                  {React.Children.toArray(children).slice(0, Math.ceil(React.Children.count(children) / 3))}
                </div>
                <div className="space-y-1 px-2">
                  {React.Children.toArray(children).slice(Math.ceil(React.Children.count(children) / 3), Math.ceil(React.Children.count(children) / 3) * 2)}
                </div>
                <div className="space-y-1 pl-2">
                  {React.Children.toArray(children).slice(Math.ceil(React.Children.count(children) / 3) * 2)}
                </div>
              </>
            ) : (
              children
            )}
          </div>
        </div>
      )}
    </div>
  );
}