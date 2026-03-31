export default function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://apps.apple.com/us/app/homebasis-tax-basis-tracker/id6760266752"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        height={60}
        style={{ height: "60px", width: "auto" }}
      />
    </a>
  );
}
