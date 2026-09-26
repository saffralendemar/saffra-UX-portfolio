import PersonaAvatar, { personas } from './PersonaAvatar';
import styles from './RequirementList.module.css';

/**
 * Requirements tagged with the personas they serve. Dropped requirements are struck through.
 * items: [{ text, personas: ['ylva' | 'paula' | 'eric'], dropped?, tone? }]
 */
export default function RequirementList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.text} className={item.dropped ? styles.dropped : styles.item} style={item.tone ? { color: item.tone } : undefined}>
          {item.dropped ? <s>{item.text}</s> : <span>{item.text}</span>}
          <span className={styles.personas}>
            {item.personas.map((persona) => (
              <PersonaAvatar key={persona} persona={persona} size={14} withFace={false} />
            ))}
            <span className="visually-hidden">
              {`(${item.personas.map((p) => personas[p].name).join(', ')}${item.dropped ? ' – deprioritised' : ''})`}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
