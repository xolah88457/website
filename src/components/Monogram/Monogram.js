import { forwardRef, useId } from 'react';
import { classes } from '../../utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      version="1.1"
      aria-hidden
      className={classes(styles.monogram, className)}
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M15.5 5h3v2.25h11V5h3v2.25h9.75V10H32.5v1.5h-3V10h-11v1.5h-3V10H6l-.25-.25v-2.5h9.75Zm-6.25 8h30v8.25h-30ZM12 15.25V19h6.25v-3.75Zm9 0V19h6.25v-3.75Zm9 0V19h6.25l.25-.25V15.5l-.25-.25ZM6.75 23.5H41.5V30h-3v-4.25L9.75 26l-.25 4H6.75Z" 
            stroke="none"
            fill="#fcfcfc"
            fillRule="evenodd"/>
          <path d="m20.75 26.25 2.75.5-.5 1-1.75 1.5L36 29.5v2.25L34.5 34 33 35.75 29.75 38l-4.25 2-5.25 1.5-5.5 1-4.25.5h-2l-1.25-2.5 7.25-.75 5.5-1 .5-.25-2.5-1.75-2-1.25.5-1 1.25-1 4 2.25 2.25 1.5 1.5-.25 4-2 2.5-2.25.5-.5H16.75l-4.25 2-1.75.25-1.5-2 2.25-1 4-1.75 3.75-2.25Z"
            stroke="none"
            fill="#fcfcfc"
            fillRule="evenodd"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
