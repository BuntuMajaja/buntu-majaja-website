import { User, Briefcase, Mail } from 'lucide-react';
import ChannelCard from './ChannelCard';
import Section from './Section';

const ChannelsSection = () => {
  const channels = [
    {
      title: 'About',
      description: 'The story, values, and what I\'m building next. Discover my journey from chemical engineer to ecosystem builder.',
      icon: User,
      onClick: () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: 'Portfolio',
      description: 'Case studies: role, actions, outcomes. Explore the innovation systems and ventures I\'ve built across Africa.',
      icon: Briefcase,
      onClick: () => {
        document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: 'Newsletter',
      description: 'FutureSight Africa — weekly notes on innovation & capital. Join 2,000+ subscribers exploring Africa\'s future.',
      icon: Mail,
      onClick: () => {
        document.querySelector('#newsletter')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  return (
    <Section id="channels" background="card" className="border-t border-border">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore My <span className="gradient-text">Universe</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Three channels that capture my work in building Africa's innovation ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {channels.map((channel, index) => (
          <ChannelCard
            key={channel.title}
            title={channel.title}
            description={channel.description}
            icon={channel.icon}
            onClick={channel.onClick}
            delay={index * 0.2}
          />
        ))}
      </div>
    </Section>
  );
};

export default ChannelsSection;
