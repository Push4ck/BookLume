import { BookOpen, Users, Download, Star } from "lucide-react";

export const stats = [
  {
    icon: BookOpen,
    label: "Books Available",
    value: "10,000+",
    color: "text-[var(--primary-brand)]",
  },
  {
    icon: Users,
    label: "Active Readers",
    value: "50,000+",
    color: "text-[var(--secondary-accent)]",
  },
  {
    icon: Download,
    label: "Downloads",
    value: "1M+",
    color: "text-[var(--success)]",
  },
  {
    icon: Star,
    label: "Average Rating",
    value: "4.8/5",
    color: "text-[var(--warning)]",
  },
];
