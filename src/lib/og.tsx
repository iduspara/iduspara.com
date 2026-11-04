import { readFile } from "node:fs/promises";
import path from "node:path";

import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Cached so OG images can be prerendered at build time. */
async function getAvatar() {
  "use cache";
  cacheLife("max");
  const buffer = await readFile(path.join(process.cwd(), "public/images/avatar.jpg"));
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

interface OgImageOptions {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/** Shared Open Graph card: black background, large title, avatar and domain. */
export async function renderOgImage({ eyebrow, title, subtitle }: OgImageOptions) {
  const avatar = await getAvatar();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#0a0a0a",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#6ee7b7", letterSpacing: 0.5 }}>
        {eyebrow}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 48 ? 60 : 72,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div style={{ display: "flex", fontSize: 30, color: "#a3a3a3", lineHeight: 1.35 }}>
            {subtitle}
          </div>
        ) : null}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain <img> */}
        <img src={avatar} width={72} height={72} alt="" style={{ borderRadius: 9999 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 600 }}>Igor Duspara</div>
          <div style={{ display: "flex", fontSize: 24, color: "#a3a3a3" }}>iduspara.com</div>
        </div>
      </div>
    </div>,
    ogSize,
  );
}
