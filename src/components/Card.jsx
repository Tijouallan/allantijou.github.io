export default function Card({ children, className = "", as: Component = "div", ...props }) {
  return (
    <Component
      className={`rounded-[var(--radius-card)] bg-card card-shadow border border-border p-6 md:p-8 transition-shadow duration-300 hover:card-shadow ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
