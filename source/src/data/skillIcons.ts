import {
  siVuedotjs,
  siReact,
  siNextdotjs,
  siAngular,
  siTypescript,
  siJavascript,
  siJquery,
  siVuetify,
  siPinia,
  siVite,
  siApollographql,
  siGraphql,
  siDotnet,
  siKeycloak,
  siOpenid,
  siJsonwebtokens,
  siRabbitmq,
  siElastic,
  siKibana,
  siGit,
  siNginx,
  siSonarqubecloud,
} from 'simple-icons'

export interface SkillIcon {
  path: string
  hex: string
}

const toIcon = (icon: { path: string; hex: string }): SkillIcon => ({
  path: icon.path,
  hex: `#${icon.hex}`,
})

/** Skill display name -> brand icon. Skills without a real brand mark are
 * intentionally omitted and fall back to a monogram badge. */
export const skillIcons: Record<string, SkillIcon> = {
  'Vue.js': toIcon(siVuedotjs),
  'React.js': toIcon(siReact),
  'Next.js': toIcon(siNextdotjs),
  Angular: toIcon(siAngular),
  TypeScript: toIcon(siTypescript),
  JavaScript: toIcon(siJavascript),
  jQuery: toIcon(siJquery),
  Vuetify: toIcon(siVuetify),
  Pinia: toIcon(siPinia),
  Vite: toIcon(siVite),
  'Apollo Client': toIcon(siApollographql),
  GraphQL: toIcon(siGraphql),
  '.NET': toIcon(siDotnet),
  Keycloak: toIcon(siKeycloak),
  'OpenID Connect': toIcon(siOpenid),
  JWT: toIcon(siJsonwebtokens),
  RabbitMQ: toIcon(siRabbitmq),
  Elasticsearch: toIcon(siElastic),
  Kibana: toIcon(siKibana),
  Git: toIcon(siGit),
  Nginx: toIcon(siNginx),
  SonarCloud: toIcon(siSonarqubecloud),
}
