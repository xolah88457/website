import profileImgLarge from '../../assets/profile-large.jpg';
import profileImgPlaceholder from '../../assets/profile-placeholder.jpg';
import profileImg from '../../assets/profile.jpg';
import { Button } from '../../components/Button';
import { DecoderText } from '../../components/DecoderText';
import { Divider } from '../../components/Divider';
import { Heading } from '../../components/Heading';
import { Image } from '../../components/Image';
import { Link } from '../../components/Link';
import { Section } from '../../components/Section';
import { Text } from '../../components/Text';
import { Transition } from '../../components/Transition';
import { Fragment, useState } from 'react';
import { media } from '../../utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Welcome!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am Ryan Nasiri, a student at York University pursuing an Honours degree in
      Computer Science/Information Technology. I am actively seeking internship
      opportunities for the summer of 2024.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      As a full-stack developer, I offer a comprehensive skill set in both front-end and
      back-end development, ensuring the creation of dynamic, responsive websites and
      applications. My expertise includes designing user interfaces, optimizing user
      experience, and integrating APIs, alongside proficiency in server-side programming,
      database management, and system architecture. I excel in developing end-to-end
      solutions, managing complex projects, and collaborating across departments to meet
      diverse needs. My commitment to quality assurance, scalability, and performance
      optimization ensures the delivery of robust, efficient software products.{' '}
      <Link href="https://www.linkedin.com/in/ryan-nasiri-1a1323261/details/experience/">
        My experience
      </Link>{' '}
      (Web, Software, Game development, and more importantly teaching.)
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/projects"
                icon="send"
              >
                Check out my Projects!
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                ></svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
