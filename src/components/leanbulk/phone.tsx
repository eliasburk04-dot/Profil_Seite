interface PhoneProps {
  children: React.ReactNode;
  label: string;
  dark?: boolean;
}

/** Device frame for HTML recreations of LeanBulk's native screens. */
export function Phone({ children, label, dark = false }: PhoneProps) {
  return (
    <figure className={`lb-phone${dark ? ' lb-phone--dark' : ''}`} aria-label={label}>
      <div className="lb-phone__screen">
        <div className="lb-phone__status" aria-hidden="true">
          <span>9:41</span>
          <span className="lb-phone__island" />
          <span className="lb-phone__icons">
            <svg viewBox="0 0 18 12" width="17" height="11">
              <rect x="0" y="8" width="3" height="4" rx="0.8" fill="currentColor" />
              <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" fill="currentColor" />
              <rect x="10" y="3" width="3" height="9" rx="0.8" fill="currentColor" />
              <rect x="15" y="0" width="3" height="12" rx="0.8" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 26 12" width="24" height="11">
              <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.4" />
              <rect x="2" y="2" width="16" height="8" rx="1.6" fill="currentColor" />
              <rect x="23.5" y="4" width="1.8" height="4" rx="0.9" fill="currentColor" opacity="0.4" />
            </svg>
          </span>
        </div>
        {children}
      </div>
    </figure>
  );
}
