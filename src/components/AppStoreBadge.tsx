export default function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://apps.apple.com/us/app/homebasis-tax-basis-tracker/id6760266752"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="60" rx="10" fill="#000" />
        <text x="90" y="22" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="system-ui, sans-serif">
          Download on the
        </text>
        <text x="90" y="42" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600" fontFamily="system-ui, sans-serif">
          App Store
        </text>
      </svg>
    </a>
  );
}
