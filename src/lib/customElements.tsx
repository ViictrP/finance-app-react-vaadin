import VaadinTextField from './form/VaadinTextField';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vaadin-text-field": VaadinTextField;
    }
  }
}

export default {};
