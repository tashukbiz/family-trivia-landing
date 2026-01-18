'use client';

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
  target: 'ios' | 'android';
}

export default function SignupButton({
  children,
  className = '',
  target,
}: SignupButtonProps) {
  const handleClick = () => {
    document
      .querySelector(`.signup-form--${target}`)
      ?.classList.add('show');
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
