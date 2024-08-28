import type { RouteLocationRaw } from 'vue-router'

export interface FormField {
  for: string;
  type: string;
  name: string;
  title: string;
  model: string;
}

export interface FormProps {
  fields: FormField[];
  validation: {}
  buttonText: string;
  to: RouteLocationRaw
}
