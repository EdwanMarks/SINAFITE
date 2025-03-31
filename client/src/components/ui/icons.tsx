import React from 'react';

// This component creates a reusable set of icons for the application
// using the RemixIcon library loaded via CDN in index.html

type IconProps = {
  name: string;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({ name, className = "" }) => {
  return (
    <i className={`ri-${name} ${className}`}></i>
  );
};

// Common icon components for easier usage
export const ScalesIcon = (props: { className?: string }) => (
  <Icon name="scales-line" className={props.className} />
);

export const GovernmentIcon = (props: { className?: string }) => (
  <Icon name="government-line" className={props.className} />
);

export const BookOpenIcon = (props: { className?: string }) => (
  <Icon name="book-open-line" className={props.className} />
);

export const MapPinIcon = (props: { className?: string }) => (
  <Icon name="map-pin-line" className={props.className} />
);

export const PhoneIcon = (props: { className?: string }) => (
  <Icon name="phone-line" className={props.className} />
);

export const MailIcon = (props: { className?: string }) => (
  <Icon name="mail-line" className={props.className} />
);

export const TimeIcon = (props: { className?: string }) => (
  <Icon name="time-line" className={props.className} />
);

export const FacebookIcon = (props: { className?: string }) => (
  <Icon name="facebook-fill" className={props.className} />
);

export const InstagramIcon = (props: { className?: string }) => (
  <Icon name="instagram-line" className={props.className} />
);

export const TwitterIcon = (props: { className?: string }) => (
  <Icon name="twitter-fill" className={props.className} />
);

export const YoutubeIcon = (props: { className?: string }) => (
  <Icon name="youtube-fill" className={props.className} />
);

export const FileTextIcon = (props: { className?: string }) => (
  <Icon name="file-text-line" className={props.className} />
);

export const CalendarIcon = (props: { className?: string }) => (
  <Icon name="calendar-line" className={props.className} />
);

export const LawIcon = (props: { className?: string }) => (
  <Icon name="law-line" className={props.className} />
);

export const QuestionAnswerIcon = (props: { className?: string }) => (
  <Icon name="question-answer-line" className={props.className} />
);

export const ChevronDownIcon = (props: { className?: string }) => (
  <Icon name="arrow-down-s-line" className={props.className} />
);

export const ArrowRightIcon = (props: { className?: string }) => (
  <Icon name="arrow-right-line" className={props.className} />
);

export const MenuIcon = (props: { className?: string }) => (
  <Icon name="menu-line" className={props.className} />
);

export const ComputerIcon = (props: { className?: string }) => (
  <Icon name="computer-line" className={props.className} />
);

export const CheckIcon = (props: { className?: string }) => (
  <Icon name="check-line" className={props.className} />
);
