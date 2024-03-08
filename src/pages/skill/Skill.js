import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import { useState, useEffect } from 'react';
import { formatDate } from '../../utils/date';
import { cssProps } from '../../utils/style';
import styles from './Skill.module.css';
import Barcode from '../../assets/barcode.svg';
import SkillContent from './/SkillContent.mdx';
import { WordRotate } from '../../components/WordRotate';

const ArticlesPost = ({ date, banner, index }) => {
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);

  return (
    <article
      className={styles.post}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {banner && (
        <div className={styles.postImage}>{/* ... existing Image component */}</div>
      )}
    </article>
  );
};

export const Skill = ({ posts }) => {
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
            <WordRotate TARGET_TEXT="Hard Skills" />
          </Heading>
          <Barcode />
        </header>
        <div className={styles.grid}>{postsList}</div>
        <SkillContent />
      </Section>
      <Footer />
    </article>
  );
};