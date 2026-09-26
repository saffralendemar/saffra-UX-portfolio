import texture from '../../assets/images/261d1a12a2eec4899b417fafa36113b95560deac.png';
import { Face, Face1, Face2 } from './artwork/PersonaFaces';
import styles from './PersonaAvatar.module.css';

/** The three CookieMonster personas, each with its colour and illustrated face. */
export const personas = {
  ylva: { name: 'Ylva', color: '#a4f2c3', Face: Face2 },
  paula: { name: 'Paula', color: '#99c8ff', Face: Face1 },
  eric: { name: 'Eric', color: '#ffb8d2', Face: Face },
};

/**
 * PersonaAvatar — textured colour disc, optionally with the persona's face.
 * Small, face-less discs mark which personas a requirement serves.
 */
export default function PersonaAvatar({ persona, size = 56, withFace = true, label }) {
  const { color, Face: PersonaFace } = personas[persona];
  return (
    <span
      className={styles.avatar}
      style={{ width: size, height: size, padding: withFace ? 14 : 0, '--persona-color': color, '--texture-size': `${size * 12.8}px` }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className={styles.texture} style={{ backgroundImage: `url(${texture})` }} />
      <span className={styles.fill} />
      {withFace && <PersonaFace />}
    </span>
  );
}
