'use client';

import Link from 'next/link';

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
};

const isExternal = (url: string) => /^https?:\/\//.test(url);

const CustomLink = ({
  href,
  children,
  openNewTab = false,
  className = '',
}: CustomLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === '#') {
      e.preventDefault();
      return;
    }

    if (openNewTab || isExternal(href)) {
      e.preventDefault();
      window.open(href, '_blank');
    }
  };

  // Use Next.js <Link> for internal routing
  if (!isExternal(href) && href !== '#') {
    return (
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  }

  // Use <a> for external or dummy links
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default CustomLink;
