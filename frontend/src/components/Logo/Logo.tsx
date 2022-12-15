import Link from 'next/link';

import styles from './Logo.module.scss';

const Logo = ({width, height}: { width: string; height: string }) => {
  return (
    <Link href="/" className={styles.logoWrapper}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 220 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M119.703 61.7468L179.623 39.478L168.585 74.1759L119.703 61.7468Z"
          fill="#00B2CA"
        />
        <path d="M203.685 41.332L179.623 39.478L168.585 74.1759L203.685 41.332Z" fill="#006588"/>
        <path
          d="M119.703 144.892L81.8009 149.025L102.31 178.648L119.703 144.892Z"
          fill="#007DA4"
        />
        <path
          d="M36.1253 196.556L81.8009 149.025L102.31 178.648L36.1253 196.556Z"
          fill="#00B0CA"
        />
        <path d="M66.4215 200L36.1253 196.556L102.31 178.648L66.4215 200Z" fill="#004D7C"/>
        <path d="M58.9736 108.47L48.0094 109.91L39.8519 82.4361L58.9736 108.47Z" fill="#006588"/>
        <path d="M79.935 102.639L58.9736 108.47L81.8009 149.025L79.935 102.639Z" fill="#007EA1"/>
        <path d="M131.44 123.535L79.935 102.639L119.703 61.7468L131.44 123.535Z" fill="#00B2CA"/>
        <path
          d="M34.7219 126.979L48.0094 109.91L30.065 87.0245L34.7219 126.979Z"
          fill="#007EA1"
        />
        <path
          d="M29.1294 64.2948L5.82378 39.478L34.9584 21.8131L29.1294 64.2948Z"
          fill="#00B1C6"
        />
        <path d="M43.815 64.2948H29.1294L34.9584 21.8131L43.815 64.2948Z" fill="#007E9D"/>
        <path d="M29.1294 64.2948H43.815L39.8519 82.4361L29.1294 64.2948Z" fill="#008BAA"/>
        <path
          d="M30.065 87.0245L29.1294 64.2948L39.8519 82.4361L30.065 87.0245Z"
          fill="#00B2CC"
        />
        <path d="M0 0L5.82378 39.478L34.9584 21.8131L0 0Z" fill="#006487"/>
        <path d="M79.935 34.8999V67.0499L112.328 42.0208L79.935 34.8999Z" fill="#00B2CA"/>
        <path d="M50.8056 46.3813L79.935 34.8999V67.0499L50.8056 46.3813Z" fill="#006588"/>
        <path
          d="M55.6991 73.3629L79.935 67.0499L50.8056 46.3813L55.6991 73.3629Z"
          fill="#00B0CA"
        />
        <path
          d="M43.815 64.2948L50.8056 46.3813L34.9584 21.8131L43.815 64.2948Z"
          fill="#00B2CA"
        />
        <path
          d="M39.8519 82.4361L55.6991 73.3629L43.815 64.2948L39.8519 82.4361Z"
          fill="#007E9D"
        />
        <path
          d="M58.9736 108.47L55.6991 73.3629L39.8519 82.4361L58.9736 108.47Z"
          fill="#00B0CA"
        />
        <path d="M220 73.3629L203.685 41.332L168.585 74.1759L220 73.3629Z" fill="#007E9D"/>
        <path d="M208.116 124.928L220 73.3629L168.585 74.1759L208.116 124.928Z" fill="#004D7C"/>
        <path
          d="M131.44 123.535L168.585 74.1759L208.116 124.928L131.44 123.535Z"
          fill="#008BAA"
        />
        <path
          d="M131.44 123.535L119.703 61.7468L168.585 74.1759L131.44 123.535Z"
          fill="#007DA4"
        />
        <path
          d="M119.703 144.892L79.935 102.639L81.8009 149.025L119.703 144.892Z"
          fill="#008FAB"
        />
        <path d="M131.44 123.535L79.935 102.639L119.703 144.892L131.44 123.535Z" fill="#00B2CC"/>
        <path
          d="M61.7541 169.88L34.7219 126.979L81.8009 149.025L61.7541 169.88Z"
          fill="#006488"
        />
        <path
          d="M34.7219 126.979L48.0094 109.91L81.8009 149.025L34.7219 126.979Z"
          fill="#0092AE"
        />
        <path d="M102.31 178.648L165.468 161.77L119.703 144.892L102.31 178.648Z" fill="#00B0CA"/>
        <path d="M131.44 123.535L165.468 161.77L119.703 144.892L131.44 123.535Z" fill="#0085A4"/>
        <path d="M131.44 123.535L165.468 161.77L208.116 124.928L131.44 123.535Z" fill="#00B0CA"/>
        <path
          d="M208.116 124.928L169.778 186.224L165.468 161.77L208.116 124.928Z"
          fill="#004D7C"
        />
        <path
          d="M169.778 186.224L165.468 161.77L137.032 184.386L169.778 186.224Z"
          fill="#008BAA"
        />
        <path d="M142.583 200L137.032 184.386L169.778 186.224L142.583 200Z" fill="#007E9D"/>
        <path
          d="M43.815 64.2948L50.8056 46.3813L55.6991 73.3629L43.815 64.2948Z"
          fill="#008BAA"
        />
        <path d="M30.065 87.0245L39.8519 82.4361L48.0094 109.91L30.065 87.0245Z" fill="#007E9D"/>
        <path d="M58.9736 108.47L48.0094 109.91L81.8009 149.025L58.9736 108.47Z" fill="#006588"/>
      </svg>
    </Link>
  );
};

export default Logo;