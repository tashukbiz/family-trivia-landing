import SignupButton from './SignupButton';

interface DownloadButtonsProps {
  containerClassName?: string;
  buttonClassName?: string;
  iosButtonClassName?: string;
  androidButtonClassName?: string;
  iosLabel?: string;
  androidLabel?: string;
  labelClassName?: string;
}

export default function DownloadButtons({
  containerClassName,
  buttonClassName = '',
  iosButtonClassName = '',
  androidButtonClassName = '',
  iosLabel = 'Download for iOS',
  androidLabel = 'Download for Android',
  labelClassName = 'truncate',
}: DownloadButtonsProps) {
  const containerClasses =
    containerClassName ?? 'flex flex-wrap gap-4 justify-center';
  const iosClasses = [buttonClassName, iosButtonClassName]
    .filter(Boolean)
    .join(' ')
    .trim();
  const androidClasses = [buttonClassName, androidButtonClassName]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className={containerClasses}>
      <SignupButton className={iosClasses}>
        <span className={labelClassName}>{iosLabel}</span>
      </SignupButton>
      <SignupButton className={androidClasses}>
        <span className={labelClassName}>{androidLabel}</span>
      </SignupButton>
    </div>
  );
}
