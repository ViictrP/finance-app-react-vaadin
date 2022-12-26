import '@vaadin/icon';
import '@vaadin/icons';

interface IconProps {
  slot?: 'prefix' | 'suffix';
  icon: string;
}

const Icon = ({ slot, icon }: IconProps) => {
  return <vaadin-icon slot={slot} icon={icon}></vaadin-icon>;
};

export default Icon;
