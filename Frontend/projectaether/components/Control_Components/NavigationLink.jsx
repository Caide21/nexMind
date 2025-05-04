import Link from "next/link";

export default function NavigationLink({ href, label = "← Return", align = "center" }) {
  return (
    <div className={`mt-12 text-${align}`}>
      <Link
        href={href}
        className="inline-block text-sm text-purple-600 dark:text-purple-400 hover:underline transition duration-200"
      >
        {label}
      </Link>
    </div>
  );
}