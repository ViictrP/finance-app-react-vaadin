import VaadinTextField from './form/VaadinTextField';
import VaadinIcon from './VaadinIcon';
import VaadinEmailField from './form/VaadinEmailField';
import VaadinPasswordField from './form/VaadinPasswordField';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vaadin-text-field': VaadinTextField;
      'vaadin-icon': VaadinIcon;
      'vaadin-email-field': VaadinEmailField;
      'vaadin-password-field': VaadinPasswordField;
    }
  }
}

export default {};
