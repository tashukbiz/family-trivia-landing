import SignupButton from './SignupButton';

interface DownloadButtonsProps {
  containerClassName?: string;
  buttonClassName?: string;
  iosButtonClassName?: string;
  iosLabel?: string;
  androidLabel?: string;
  labelClassName?: string;
  /** Campaign token identifying where on the site the click came from. */
  placement?: string;
}

export default function DownloadButtons({
  containerClassName,
  buttonClassName = '',
  iosButtonClassName = '',
  iosLabel = 'Download for iOS',
  androidLabel = 'Get it on Google Play',
  labelClassName = 'truncate',
  placement = 'web-blog',
}: DownloadButtonsProps) {
  const containerClasses =
    containerClassName ?? 'flex flex-wrap gap-4 justify-center';
  const iosClasses = [buttonClassName, iosButtonClassName]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className={containerClasses}>
      <SignupButton className={iosClasses} target='ios' placement={placement}>
        <span className={labelClassName}>{iosLabel}</span>
      </SignupButton>
      <SignupButton className={buttonClassName} target='android' placement={placement}>
        <span className={labelClassName}>{androidLabel}</span>
      </SignupButton>
    </div>
  );
}
