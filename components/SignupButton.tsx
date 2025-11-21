'use client';

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function SignupButton({ children, className = '' }: SignupButtonProps) {
  const handleClick = () => {
    document.querySelector('.signup-form')?.classList.add('show');
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
