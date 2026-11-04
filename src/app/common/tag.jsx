import { darken, lighten } from "color2k";

export function Tag({ title, color }) {
  return (
    <div
      style={{
        backgroundColor: lighten(color, 0.2),
        color: darken(color, 0.25),
      }}
      className="rounded-2xl px-4 py-2 inline-block m-1 transition-all duration-200 hover:scale-110 cursor-pointer">
      {title}
    </div>
  );
}
