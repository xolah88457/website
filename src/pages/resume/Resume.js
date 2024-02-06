import Barcode from '../../assets/barcode.svg';
import { Button } from '../../components/Button';
import { DecoderText } from '../../components/DecoderText';
import { Divider } from '../../components/Divider';
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';
import { Image } from '../../components/Image';
import { Section } from '../../components/Section';
import { Text } from '../../components/Text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import RouterLink from 'next/link';
import { useState, useEffect } from 'react';
import { formatDate } from '../../utils/date';
import { classes, cssProps } from '../../utils/style';
import styles from './Resume.module.css';
import ResumeContent from './/ResumeContent.mdx';
import { WordRotate } from '../../components/WordRotate';

const ArticlesPost = ({
    slug,
    title,
    abstract,
    date,
    banner,
    timecode,
    index,
  }) => {
    const [hovered, setHovered] = useState(false);
    const [dateTime, setDateTime] = useState(null);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        setDateTime(formatDate(date));
    }, [date, dateTime]);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
  
    return (
      <article
        className={styles.post}
        style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
      >
        {banner && (
          <div className={styles.postImage}>
            {/* ... existing Image component */}
          </div>
        )}
        
      </article>
    );
  };
  
export const Resume = ({ posts }) => {
    const { width } = useWindowSize();
    const singleColumnWidth = 1190;
    const isSingleColumn = width <= singleColumnWidth;
  
    const postsList = posts.map((post, index) => (
      <ArticlesPost key={post.slug} {...post} index={index} />
    ));
  
    return (
      <article className={styles.articles}>
        <Section className={styles.content}>
          <header className={styles.header}>
            <Heading className={styles.heading} level={5} as="h1">
              <WordRotate TARGET_TEXT="My Resume" />
            </Heading>
          </header>
          <div className={styles.grid}>
            {postsList}
          </div>
          <ResumeContent />
        </Section>
        <Footer />
      </article>
    );
  };
  