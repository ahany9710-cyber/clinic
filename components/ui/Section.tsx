import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "white" | "beige" | "rose";
}

const bgMap = {
  white: "bg-white",
  beige: "bg-beige-light",
  rose: "bg-rose",
};

export function Section({
  id,
  children,
  className,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", bgMap[background], className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
