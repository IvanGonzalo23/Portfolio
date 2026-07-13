import { stack } from "../../data/profile";
import "./Stack.css";

export function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">cat stack.yml</span>
          <h2 className="section-title">Stack &amp; herramientas</h2>
        </div>

        <div className="stack-tree">
          {stack.map((group) => (
            <div className="stack-group" key={group.group}>
              <div className="stack-group-name">{group.group}/</div>
              <div className="stack-items">
                {group.items.map((item) => (
                  <span className="stack-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
