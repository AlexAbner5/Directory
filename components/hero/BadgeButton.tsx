'use client';

interface ButtonProps {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  href?: string;
}

export default function Button({ text = "Made by Alex Matias", onClick, className = "", href = "https://www.alex-matias.com" }: ButtonProps) {
  return (
    
    <button
      className={`card-wrapper h-[32px] w-[220px] relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 ${className} hover:scale-[1.02]`}
      onClick={(e) => {
        if (href) window.open(href, '_blank');
        if (onClick) onClick(e);
      }}
    >
      <div className="card-content flex items-center justify-center text-xs h-full w-full">
        <div className="max-w-[60%] text-center text-white">{text}</div>
      </div>
    </button>
  );
}

//"Create image whith AI"