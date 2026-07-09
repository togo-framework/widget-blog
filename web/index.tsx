import { registerWidget, type WidgetContext } from "@togo-framework/widget";

interface Post { title: string; date?: string; url?: string }
export function Blog({ settings }: WidgetContext) {
  const posts = (settings.posts as Post[]) ?? [{ title: "Hello, world", date: "2026" }];
  return (
    <ul className="wx-blog" style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
      {posts.map((p, i) => (
        <li key={i}>
          <a href={p.url ?? "#"}>{p.title}</a>
          {p.date ? <span style={{ opacity: 0.6, fontSize: 12 }}> - {p.date}</span> : null}
        </li>
      ))}
    </ul>
  );
}
registerWidget({ key: "blog", title: "Latest writing", defaultZone: "body", Comp: Blog });
