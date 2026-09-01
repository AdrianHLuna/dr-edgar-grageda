import Link from "next/link";
import StructuredData from "./StructuredData";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isDark?: boolean;
}

export default function Breadcrumbs({ items, isDark = true }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <StructuredData data={schema} />
      <nav aria-label="Breadcrumb" className="py-2 text-xs font-bold">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <FaChevronRight size={10} className={isDark ? "text-emerald-500" : "text-slate-400"} />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className={isDark ? "text-emerald-400 hover:text-white transition" : "text-emerald-700 hover:underline"}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isDark ? "text-white font-black" : "text-slate-900 font-bold"}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
