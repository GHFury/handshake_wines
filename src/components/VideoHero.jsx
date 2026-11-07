export default function VideoHero({ src, videoId, poster, overlay, height = "100vh", children }) {
  const sources = src
    ? [src]
    : videoId
      ? [
          `https://videos.pexels.com/video-files/${videoId}/${videoId}-hd_1920_1080_30fps.mp4`,
          `https://videos.pexels.com/video-files/${videoId}/${videoId}-hd_1280_720_30fps.mp4`,
          `https://videos.pexels.com/video-files/${videoId}/${videoId}-hd_1280_720_24fps.mp4`,
        ]
      : [];

  const defaultOverlay = "linear-gradient(160deg, rgba(6,4,2,0.28) 0%, rgba(6,4,2,0.55) 55%, rgba(6,4,2,0.85) 100%)";

  return (
    <section style={{ position: "relative", height, overflow: "hidden" }}>
      <video autoPlay muted loop playsInline poster={poster}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}>
        {sources.map((s) => <source key={s} src={s} type="video/mp4" />)}
      </video>
      <div style={{ position: "absolute", inset: 0, background: overlay || defaultOverlay }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>{children}</div>
    </section>
  );
}
