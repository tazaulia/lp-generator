import type { TemplateType } from '../hooks/useFormState';
import typeA from './modules/typeA';
import typeB from './modules/typeB';
import typeC from './modules/typeC';
import typeD from './modules/typeD';
import typeE from './modules/typeE';
import typeF from './modules/typeF';
import { base } from './base';

export interface TemplateModule {
  label: string;
  /** id of this type's Section 5; base links like "See What's Inside" point to it */
  section5Id: string;
  storageKey: string;
  popupVerb: string;
  s5: string;
  s7: string;
}

const modules: Record<Exclude<TemplateType, ''>, TemplateModule> = {
  A: typeA,
  B: typeB,
  C: typeC,
  D: typeD,
  E: typeE,
  F: typeF,
};

export function selectModules(type: TemplateType): TemplateModule {
  if (!type) throw new Error('templateType is required');
  return modules[type as Exclude<TemplateType, ''>];
}

export function buildTemplate(mod: TemplateModule): string {
  return base
    .replace('{{section5}}', mod.s5)
    .replaceAll('{{section5Id}}', mod.section5Id)
    .replace('{{section7}}', mod.s7)
    .replace('{{storageKey}}', mod.storageKey)
    .replace('{{popupVerb}}', mod.popupVerb);
}
