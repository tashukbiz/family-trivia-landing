import SignupButton from './SignupButton';

interface DownloadButtonsProps {
  containerClassName?: string;
  buttonClassName?: string;
  iosButtonClassName?: string;
  iosLabel?: string;
  labelClassName?: string;
}

export default function DownloadButtons({
  containerClassName,
  buttonClassName = '',
  iosButtonClassName = '',
  iosLabel = 'Download for iOS',
  labelClassName = 'truncate',
}: DownloadButtonsProps) {
  const containerClasses =
    containerClassName ?? 'flex flex-wrap gap-4 justify-center';
  const iosClasses = [buttonClassName, iosButtonClassName]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className={containerClasses}>
      <SignupButton className={iosClasses} target='ios'>
        <span className={labelClassName}>{iosLabel}</span>
      </SignupButton>
    </div>
  );
}
